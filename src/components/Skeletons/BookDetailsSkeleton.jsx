import { Skeleton, Box } from '@mui/material';
import { StyledTableRowDetails } from 'components/BookDetails/BookDetails.styled';
import { StyledTableCell } from 'components/BookDetails/BookDetails.styled';

export const BookDetailsSkeleton = () => {
  return (
    <StyledTableRowDetails>
      <StyledTableCell colSpan={4}>
        <Box>
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Box>
              <Skeleton
                variant="rectangular"
                sx={{ height: '25vw', width: '21vw' }}
              />
            </Box>
            <Box sx={{ flexGrow: 2 }}>
              <Skeleton variant="rectangular" sx={{ height: '35vw' }} />
            </Box>
          </Box>
        </Box>
      </StyledTableCell>
    </StyledTableRowDetails>
  );
};
