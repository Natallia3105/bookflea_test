'use server';

import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { createBook } from '@/services/books';
import { redirect } from 'next/navigation';
import { uploadImages } from '@/services/uploader';

const createBookFormSchema = zfd.formData({
  title: zfd.text(z.string({ message: 'Назва книги обовʼязкова' })),
  author: zfd.text(
    z.string({
      message: 'Автор обовʼязковий',
    }),
  ),
  price: zfd.numeric(
    z
      .number({
        message: 'Ціна обовʼязкова',
      })
      .min(1, 'Ціна не може бути нижчою нуля'),
  ),
  photos: z
      .array(zfd.file(z.instanceof(File)), {message: 'Мінімум 1 фото обовʼязкове'})
      .min(1, 'Мінімум 1 фото обовʼязкове'),
  });

export const createBookAction = async (
  data: FormData,
): Promise<{
  success: boolean;
  errors?: Record<string, string[]>;
}> => {
  const result = createBookFormSchema.safeParse(data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, price, author, photos } = result.data;

  const photoUrls = await uploadImages(photos);

  await createBook({
    title,
    author,
    price,
    images: photoUrls,
  });

  redirect('/');

  return {
    success: true,
  };
};
