import { createContext, useContext } from 'react';

export const BooksContext = createContext();

export const useBooksContext = () => useContext(BooksContext);
