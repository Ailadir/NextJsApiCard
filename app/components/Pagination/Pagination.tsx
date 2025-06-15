'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationMeta } from '../../types/car';
import CircleButton from '../CircleButton/CircleButton';
import Dots from '../Dots/Dots';

function getPages(current: number, last: number): (number | string)[] {
  if (current > last - 5) {
    const start = Math.max(1, last - 4);
    const pages: (number | string)[] = [];
    for (let i = start; i <= last; i++) {
      pages.push(i);
    }
    return pages;
  }

  const pages: (number | string)[] = [current];
  for (let i = 1; i <= 2; i++) {
    const page = current + i;
    if (page < last) {
      pages.push(page);
    }
  }

  pages.push('...');
  pages.push(last);

  return pages;
}

type PaginationProps = {
  meta: PaginationMeta;
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
  const pages = getPages(currentPage, lastPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('_page', page.toString());
    router.push(`?${params.toString()}`);
  };

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
