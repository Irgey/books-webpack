// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// Mui components
// Local
import { searchByQuery } from '../services/books-api';
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
