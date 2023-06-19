import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BooksPage } from 'pages/BooksPage/BooksPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
