import { Skeleton } from '@mui/material';

export const BooksTableSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
      <Skeleton variant="rectangular" height={400} />
    </>
  );
};
