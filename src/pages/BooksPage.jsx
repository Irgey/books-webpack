// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Mui components
// Local
import { BooksTable } from 'components/BooksTable/BooksTable';

export const BooksPage = () => {
  return (
    <>
      <ReactQueryDevtools />
      <BooksTable />
      <div>BooksPage</div>
    </>
  );
};
