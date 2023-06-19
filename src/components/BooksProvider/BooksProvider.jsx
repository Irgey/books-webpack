import { BooksContext } from 'hooks/booksContext';
import { useSearchParams } from 'react-router-dom';

export const BooksProvider = ({ children }) => {
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
      {children}
    </BooksContext.Provider>
  );
};
