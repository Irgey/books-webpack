import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { serveLink } from 'utils/serveLink';
import { StyledDescriptionContainer } from './MobileDetailsCard.styled';
// import Collapse from '@mui/material/Collapse';

export const MobileDetailsCard = ({ detailedData }) => {
  return (
    // <Collapse in={detailedData} timeout="auto" unmountOnExit>
    detailedData && (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={detailedData.volumeInfo.imageLinks.thumbnail}
            alt={detailedData.volumeInfo.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {detailedData.volumeInfo.publisher},
              {detailedData.volumeInfo.publishedDate}
            </Typography>
            <StyledDescriptionContainer>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {detailedData.volumeInfo.description}
              </ReactMarkdown>
            </StyledDescriptionContainer>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {serveLink(detailedData.volumeInfo.infoLink)}
          </Button>
        </CardActions>
      </Card>
    )
    // </Collapse>
  );
};
