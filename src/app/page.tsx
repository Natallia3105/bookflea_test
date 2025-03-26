import { getBooks } from '@/services/books';
import Book from '@/components/Book';

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 list-none p-4 sm:p-6">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = 'force-dynamic'
