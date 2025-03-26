import { Book, Prisma } from '@prisma/client';
import prisma from '@/services/db';
import BookCreateInput = Prisma.BookCreateInput;

export const getBooks = async (): Promise<Book[]> => {
  return prisma.book.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const createBook = async (data: BookCreateInput) => {
  await prisma.book.create({
    data,
  });
};
