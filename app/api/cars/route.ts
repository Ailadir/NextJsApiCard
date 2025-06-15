import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://testing-api.ru-rating.ru/cars';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const response = await fetch(
      `${API_BASE_URL}?${searchParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 
