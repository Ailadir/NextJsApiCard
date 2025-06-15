'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { SortOrder } from '../types/car';

export default function Sorting() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get('_sort') === 'price'
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
      <button
        onClick={() => handleSort(null)}
        className={`px-4 py-2 rounded ${currentSort === null
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-black'
        }`}
      >
        Без сортировки
      </button>
      <button
        onClick={() => handleSort('asc')}
        className={`px-4 py-2 rounded ${currentSort === 'asc'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-black'
        }`}
      >
        По возрастанию цены
      </button>
      <button
        onClick={() => handleSort('desc')}
        className={`px-4 py-2 rounded ${currentSort === 'desc'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-black'
        }`}
      >
        По убыванию цены
      </button>
    </div>
  );
} 
