export default function getPages(current: number, last: number): (number | string)[] {
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
