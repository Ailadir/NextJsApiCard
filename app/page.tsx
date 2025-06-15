import { Suspense } from 'react';
import CarCard from './components/CarCard';
import Sorting from './components/Sorting';
import Pagination from './components/Pagination/Pagination';
import { ApiResponse } from './types/car';

async function getCars(searchParams: URLSearchParams): Promise<ApiResponse> {
  const baseUrl = 'https://testing-api.ru-rating.ru';
  const url = new URL('/cars', baseUrl);
  url.search = searchParams.toString();

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch cars');
  }

  return res.json();
}

type HomeProps = {
  params: Promise<Record<string, unknown>>;
  searchParams: Promise<{
    _sort?: string;
    _order?: string;
    [key: string]: string | undefined;
  }>;
};

export default async function Home(props: HomeProps) {
  console.log('Home props:', props);
  const searchParams = await props.searchParams;
  const params = new URLSearchParams();

  params.set('_limit', '12');
  params.set('_page', '1');


  if (searchParams._sort) {
    params.set('_sort', searchParams._sort as string);
    params.set('_order', searchParams._order as string);
  }

  if (searchParams._page) {
    params.set('_page', searchParams._page as string);
  }

  const { data: cars, meta } = await getCars(params);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Автомобили</h1>

      <Suspense fallback={<div>Загрузка сортировки...</div>}>
        <Sorting />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Suspense key={car.id} fallback={<div>Загрузка карточки...</div>}>
            <CarCard car={car} />
          </Suspense>
        ))}
      </div>

      <Suspense fallback={<div>Загрузка пагинации...</div>}>
        <Pagination meta={meta} />
      </Suspense>
    </main>
  );
}
