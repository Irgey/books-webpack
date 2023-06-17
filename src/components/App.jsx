import { Routes, Route, useSearchParams } from 'react-router-dom';
import '@fontsource/roboto';
import { BooksPage } from 'pages/BooksPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from './layout/Layout';
import { HomePage } from 'pages/HomePage';
import { useState } from 'react';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('q');
  const [query, setQuery] = useState('');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
          />
        }
      >
        <Route index element={<HomePage />} />
        <Route
          path="books"
          element={
            <BooksPage searchParams={searchParams} query={queryParams} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};