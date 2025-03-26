'use client';

import { CreateBookForm } from '@/components/CreateBookForm';

export default function CreateBook() {
  return (
    <div className="max-w-[700px] mx-auto">
      <h1 className="text-3xl font-semibold mb-3">Що продаєш?</h1>
      <CreateBookForm />
    </div>
  );
}
