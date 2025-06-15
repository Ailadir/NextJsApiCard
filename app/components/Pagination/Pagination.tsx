'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationMeta } from '../../types/car';
import CircleButton from '../CircleButton/CircleButton';
import Dots from '../Dots/Dots';

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
  const {
    page,
    last_page,
  } = meta

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = page;
  const lastPage = last_page;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('_page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const pages = getPages(currentPage, lastPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
    <div className="flex justify-center gap-2 mt-8">
      <CircleButton
        disabled={isFirstPage}
        active={!isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </CircleButton>
      {pages.map((page, idx) =>
        typeof page === 'number' ? (
          <CircleButton
            key={idx}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </CircleButton>
        ) : (
          <Dots key={idx} />
        )
      )}
      <CircleButton
        disabled={isLastPage}
        active={!isLastPage}
        onClick={() => handlePageChange(currentPage + 1)} >
        &gt;
      </CircleButton>
    </div>
  );
} 
