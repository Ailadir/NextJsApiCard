# Next.js Car Catalog

A car catalog web application built with Next.js 15, TypeScript, and Tailwind CSS. The app fetches car data from a public API, displays car cards with images and details, and supports sorting and pagination synchronized with the URL.

## Features

- SSR/SSG with Next.js App Router
- Car cards with image, name, price, modification, mileage, gearbox, engine type, color, year, and monthly price
- Sorting by price (ascending/descending/none)
- Pagination with ellipsis and active page highlighting (like Avito/Auto.ru)
- All state (page, sorting) is synchronized with URL query parameters
- Responsive and mobile-friendly design
- Optimized images with Next.js Image component
- API proxying for client-side requests

## Technologies

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the development server

```bash
yarn dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Build and start for production

```bash
yarn build && yarn start
# or
npm run build && npm start
```

## API

- Uses [https://testing-api.ru-rating.ru/cars](https://testing-api.ru-rating.ru/cars) with pagination and sorting via query params.
- Example: `?_limit=12&_page=1&_sort=price&_order=asc`

## Deployment

- Easily deployable to [Vercel](https://vercel.com/) or any Node.js hosting.

## Folder Structure

```
app/
  components/      # UI components (CarCard, Sorting, Pagination)
  types/           # TypeScript types
  api/             # API proxy route
  page.tsx         # Main page
public/            # Static assets (if needed)
next.config.ts     # Next.js config (image domains, rewrites)
```

## Customization

- You can adjust the card design, add more car details, or improve the mobile layout as needed.

## License

MIT (add your license if needed)

---

<!-- **Demo:** [Deployed on Vercel](https://your-vercel-deployment-url) -->

**Repository:** [GitHub](https://github.com/Ailadir/NextJsApiCard)
