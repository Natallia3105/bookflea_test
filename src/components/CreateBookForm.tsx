'use client';

import { FormInput } from '@/components/FormInput';
import { Button } from '@/components/Button';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { ImageUploader } from '@/components/ImageUploader';
import { useTransition } from 'react';
import { createBookAction } from '@/actions/createBookAction';
import * as React from 'react';

type FormValues = {
  title: string;
  author: string;
  price: string;
  photos: string;
};

export const CreateBookForm = () => {
  const methods = useForm();

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('author', data.author);
      formData.append('price', data.price);

      if (data.photos.length > 0) {
        for (let i = 0; i < data.photos.length; i++) {
          formData.append('photos', data.photos[i]);
        }
      }

      const result = await createBookAction(formData);

      if (!result.success) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages], index) => {
            if (index === 0) {
              methods.setFocus(field);
            }
            methods.setError(field, {
              message: messages?.[0],
            });
          });
        }

        return;
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) =>
          onSubmit(values as FormValues),
        )}
        className="flex flex-col gap-2 pb-30 md:pb-0"
      >
        <FormInput
          name="title"
          inputType="text"
          placeholder="Маленький Принц"
          label="Назва"
        />

        <FormInput
          name="author"
          inputType="text"
          placeholder="Антуан де Сент-Екзюпері"
          label="Автор"
        />

        <FormInput
          name="price"
          inputType="text"
          placeholder="25"
          label="Ціна (злотий)"
        />

        <Controller
          defaultValue=""
          control={methods.control}
          name="photos"
          render={({ field: { onChange }, fieldState: { error } }) => {
            return (
              <div>
                <ImageUploader
                  onError={(errorMessage) => {
                    methods.setError('photos', {
                      message: errorMessage,
                    });
                  }}
                  onDropImages={(files) => {
                    onChange(files);
                  }}
                />
                {error && (
                  <p className="ml-1 text-red-500 text-xs">{error.message}</p>
                )}
              </div>
            );
          }}
        />

        <Button btnType="submit" label="Опублікувати" isLoading={isPending} />
      </form>
    </FormProvider>
  );
};
