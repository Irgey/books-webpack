import { Routes, Route, useSearchParams } from 'react-router-dom';
import { BooksContext } from 'hooks/booksContext';

import { Layout } from 'components/layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BooksPage } from 'pages/BooksPage/BooksPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const Router = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q');
  const detailsParam = searchParams.get('details');
  const contextValues = {
    queryParam,
    detailsParam,
    setSearchParams,
  };
  return (
    <BooksContext.Provider value={contextValues}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BooksContext.Provider>
  );
};
