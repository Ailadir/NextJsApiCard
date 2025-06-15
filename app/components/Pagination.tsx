'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationMeta } from '../types/car';

interface PaginationProps {
  meta: PaginationMeta;
}

function getPages(current: number, last: number) {
  const pages = [];
  if (last <= 7) {
    for (let i = 1; i <= last; i++) pages.push(i);
    return pages;
  }
  if (current <= 3) return [1, 2, 3, 4, '...', last];
  if (current >= last - 2) return [1, '...', last - 3, last - 2, last - 1, last];
  return [1, '...', current - 1, current, current + 1, '...', last];
}

export default function Pagination({ meta }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = meta.page;
  const lastPage = meta.last_page;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('_page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const pages = getPages(currentPage, lastPage);

  return (
    <div className="flex justify-center gap-2 mt-8">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`w-9 h-9 rounded-full flex items-center justify-center
          ${currentPage === 1 ? 'bg-gray-300 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        &lt;
      </button>
      {/* Pages */}
      {pages.map((page, idx) =>
        typeof page === 'number' ? (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center
              ${page === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'}`}
          >
            {page}
          </button>
        ) : (
          <span
            key={`dots-${idx}`}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 text-gray-500"
          >
            ...
          </span>
        )
      )}
      {/* Next */}
      <button
        disabled={currentPage === lastPage}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`w-9 h-9 rounded-full flex items-center justify-center
          ${currentPage === lastPage ? 'bg-gray-300 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        &gt;
      </button>
    </div>
  );
} 
