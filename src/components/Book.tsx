import Image from 'next/image';
import { Book } from '@prisma/client';

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="max-w-[164px] bg-white overflow-hidden text-left">
      <div className="bg-gray-100 rounded-xl w-full h-[178px] flex items-center justify-center">
        <Image
          src={book.images[0]}
          alt={book.title}
          width={106}
          height={160}
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-[10px] text-gray-500 pt-2">{book.author}</p>
        <h3 className="font-inter font-bold text-base">{book.title}</h3>
        <p className="text-[12px] font-normal pt-2">{book.price} zł</p>
      </div>
    </div>
  );
};

export default BookCard;
