import {
  Skeleton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Box,
} from '@mui/material';

export const MobileDetailsCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 480 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" height={140} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} />

          <Box>
            <Skeleton
              variant="rectangular"
              sx={{ height: '80px', width: '100%' }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton
          variant="rectangular"
          sx={{ height: '25px', width: '70px' }}
        />
      </CardActions>
    </Card>
  );
};
