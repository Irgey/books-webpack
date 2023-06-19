// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Mui components
// Local
import { BooksTable } from 'components/BooksTable/BooksTable';
import { Typography, Container } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useBooksContext } from 'hooks/booksContext';
import { useQuery } from '@tanstack/react-query';
import { getFullInfoById, searchByQuery } from 'services/books-api';
import { serveLink } from 'utils/serveLink';
import { MobileBooksList } from 'components/MobileBooksList/MobileBooksList';
import { useMediaQuery } from 'react-responsive';
import { BooksTableSkeleton } from 'components/Skeletons/BooksTableSkeleton';

export const BooksPage = ({ query }) => {
  const { queryParam, setSearchParams, detailsParam } = useBooksContext();

  const isMobile = useMediaQuery({ query: '(max-width: 490px)' });

  const {
    data: books,
    isFetching: isFetchingBooks,
    status,
  } = useQuery({
    queryKey: ['books', queryParam],
    queryFn: () => searchByQuery(queryParam.trim().split(' ').join('+')),

    enabled: Boolean(queryParam),
  });
  console.log('Status >>', status);
  const { data: detailedData, isFetching: isFetchingDetails } = useQuery({
    queryKey: ['bookInfo', detailsParam],
    queryFn: () => getFullInfoById(detailsParam),
    enabled: Boolean(detailsParam),
  });
  const handleRowClick = id => {
    if (detailsParam === id) {
      setSearchParams({ q: queryParam });
      return;
    }
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
        {/* Skeleton */}
        {isFetchingBooks && <BooksTableSkeleton />}
        {/* Fetched Data */}
        {status === 'success' && isMobile ? (
          <MobileBooksList
            books={books}
            queryParam={queryParam}
            isFetchingDetails={isFetchingDetails}
            handleRowClick={handleRowClick}
            detailedData={detailedData}
            detailsParam={detailsParam}
            serveLink={serveLink}
          />
        ) : (
          <BooksTable
            books={books}
            queryParam={queryParam}
            isFetchingDetails={isFetchingDetails}
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
