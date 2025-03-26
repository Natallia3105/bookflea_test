'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import Image from 'next/image';
import classNames from "classnames";

type Props = {
  hasError: boolean;

  onDropImages(files: File[]): void;
  onError(error: string): void;
};

const maxSize = 2.5 * 1024 * 1024; // 2.5 MB in bytes

export const ImageUploader = ({ onDropImages, onError, hasError }: Props) => {
  const [images, setImages] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onDropImages(acceptedFiles);
    setImages(acceptedFiles);
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    fileRejections.forEach((rejection) => {
      rejection.errors.forEach((err) => {
        if (err.code === 'too-many-files') {
          onError('Ти можеш завантажити максимум 5 фото');
        } else if (err.code === 'file-invalid-type') {
          onError('Дозволені тільки фотографії');
        } else if (err.code === 'file-too-large') {
          onError('Дозволені файли менші ніж 2.5 мегабайти. Це ліміти безкоштовної версії Vercel :)');
        } else {
          onError(err.message);
        }
      });
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/*': [],
    },
    maxFiles: 5,
    multiple: true,
    maxSize,
  });

  useEffect(() => {
    return () => {
      // @ts-expect-error preview exists in uploader plugin
      images.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [images]);

  const dropzoneClasses = classNames(
'w-full h-48 border border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition',
      {
        'border-red-500 mb-2': hasError,
      },
  );

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <label className="block mb-2 text-black-900">
        Фотографії
        <span className="text-red-500">*</span>
      </label>

      <div className={dropzoneClasses}>
        <Image src="/Upload.svg" alt="Загрузити фото" width={59} height={59} />

        <p className="text-base mt-2">Додай до 5 фотографій</p>
      </div>
      {images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto mt-2">
          {images.map((file, idx) => (
            <Image
              key={idx}
              width={80}
              height={80}
              src={URL.createObjectURL(file)}
              alt={`uploaded-${idx}`}
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
};
