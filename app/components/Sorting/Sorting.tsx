'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { SortOrder } from '../../types/car';
import SortingButton from '../Button/Button';

export default function Sorting() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort =
    searchParams.get('_sort') === 'price'
      ? (searchParams.get('_order') as SortOrder)
      : null;

  const handleSort = (order: SortOrder) => {
    const params = new URLSearchParams(searchParams.toString());

    if (order === null) {
      params.delete('_sort');
      params.delete('_order');
    } else {
      params.set('_sort', 'price');
      params.set('_order', order);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 mb-6">
      <SortingButton active={currentSort === null} onClick={() => handleSort(null)}>
        Без сортировки
      </SortingButton>
      <SortingButton active={currentSort === 'asc'} onClick={() => handleSort('asc')}>
        По возрастанию цены
      </SortingButton>
      <SortingButton active={currentSort === 'desc'} onClick={() => handleSort('desc')}>
        По убыванию цены
      </SortingButton>
    </div>
  );
}
