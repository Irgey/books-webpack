// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.min.css';
// Mui components
import { Typography, Container } from '@mui/material';

// Local
import { BooksTable } from 'components/BooksTable/BooksTable';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useBooksContext } from 'hooks/booksContext';
import { useQuery } from '@tanstack/react-query';
import { getFullInfoById, searchByQuery } from 'services/books-api';
import { serveLink } from 'utils/serveLink';
import { MobileBooksList } from 'components/MobileBooksList/MobileBooksList';
import { useMediaQuery } from 'react-responsive';
import { BooksTableSkeleton } from 'components/Skeletons/BooksTableSkeleton';
import { ErrorAPIRepresentation } from 'components/ErrorAPIRepresentation/ErrorAPIRepresentation';

export const BooksPage = () => {
  const { queryParam, setSearchParams, detailsParam } = useBooksContext();

  const isMobile = useMediaQuery({ query: '(max-width: 490px)' });

  const {
    data: books,
    isFetching: isFetchingBooks,
    status,
    error,
  } = useQuery({
    queryKey: ['books', queryParam],
    queryFn: () => searchByQuery(queryParam.trim().split(' ').join('+')),

    enabled: Boolean(queryParam),
  });
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
        {/* Fetching failed */}
        {error && <ErrorAPIRepresentation error={error} />}
      </Container>
    </>
  );
};
