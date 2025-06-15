'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationMeta } from '../types/car';

interface PaginationProps {
  meta: PaginationMeta;
}

export default function Pagination({ meta }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('_page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(meta.currentPage - 1)}
        disabled={meta.currentPage === 1}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        Назад
      </button>

      {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded ${page === meta.currentPage
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(meta.currentPage + 1)}
        disabled={meta.currentPage === meta.totalPages}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        Вперед
      </button>
    </div>
  );
} 
