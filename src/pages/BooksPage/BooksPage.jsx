// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Mui components
// Local
import { BooksTable } from 'components/BooksTable/BooksTable';
import { Typography, Container } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useBooksContext } from 'hooks/booksContext';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFullInfoById, searchByQuery } from 'services/books-api';
import { serveLink } from 'utils/serveLink';
import { MobileBooksList } from 'components/MobileBooksList/MobileBooksList';
import { useMediaQuery } from 'react-responsive';

export const BooksPage = ({ query }) => {
  const { queryParam, setSearchParams, detailsParam } = useBooksContext();
  const [currentId, setCurrentId] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 490px)' });
  const { data: books, isLoading } = useQuery({
    queryKey: ['books', queryParam],
    queryFn: () => searchByQuery(queryParam.trim().split(' ').join('+')),
    keepPreviousData: true,

    enabled: Boolean(queryParam),
  });

  const { data: detailedData } = useQuery({
    queryKey: ['bookInfo', detailsParam],
    queryFn: () => getFullInfoById(detailsParam),
    keepPreviousData: true,
    enabled: Boolean(detailsParam),
  });
  const handleRowClick = id => {
    if (currentId === id) {
      setCurrentId('');
      setSearchParams({ q: queryParam });
      return;
    }
    setCurrentId(id);
    setSearchParams({ q: queryParam, details: id });
  };
  return (
    <>
      <ReactQueryDevtools />
      <Container maxWidth="xl">
        {!queryParam && (
          <>
            <Typography>
              Type your search query on search field <ArrowUpwardIcon />
            </Typography>
          </>
        )}
        {isMobile ? (
          <MobileBooksList
            books={books}
            queryParam={queryParam}
            isLoading={isLoading}
            handleRowClick={handleRowClick}
            detailedData={detailedData}
            detailsParam={detailsParam}
            serveLink={serveLink}
          />
        ) : (
          <BooksTable
            books={books}
            queryParam={queryParam}
            isLoading={isLoading}
            handleRowClick={handleRowClick}
            detailedData={detailedData}
            detailsParam={detailsParam}
            serveLink={serveLink}
          />
        )}
      </Container>
    </>
  );
};
