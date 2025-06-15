import Image from 'next/image';
import { Car } from '../../types/car';

const carPlaceholder = 'https://via.placeholder.com/400x300?text=No+Image';

type CarCardProps = {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const {
    mark_id,
    folder_id,
    price,
    images,
    modification_id,
    run,
    gearbox,
    engine_type,
    color,
    year
  } = car

  const imageUrl = images?.image?.[0] || carPlaceholder;
  const monthlyPrice = Math.round((price / 70) / 12).toLocaleString('ru-RU');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`${mark_id} ${folder_id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 text-black">
        <h3 className="text-lg font-semibold mb-1">
          {mark_id} {folder_id}
        </h3>
        <div className="text-xl font-bold mb-1">
          {price.toLocaleString('ru-RU')} ₽
          <span className="text-sm font-normal ml-2 text-gray-500">
            от {monthlyPrice} ₽/мес
          </span>
        </div>
        <div className="text-sm mb-2">
          {modification_id}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs items-center mb-1">
          <span>🚗 {run?.toLocaleString('ru-RU')} км</span>
          <span>⚙️ {gearbox}</span>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs items-center">
          <span>⛽ {engine_type}</span>
          <span>🌓 {color}</span>
          <span>📅 {year}</span>
        </div>
      </div>
    </div>
  );
} 
