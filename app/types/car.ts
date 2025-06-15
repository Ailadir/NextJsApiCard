export interface Car {
  id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images: {
    image: string[];
  };
  modification_id: string;
  run: number;
  gearbox: string;
  engine_type: string;
  color: string;
  year: number; 
}

export interface PaginationMeta {
    page: number;
    last_page: number;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface ApiResponse {
  data: Car[];
  meta: PaginationMeta;
}

export type SortOrder = 'asc' | 'desc' | null; 