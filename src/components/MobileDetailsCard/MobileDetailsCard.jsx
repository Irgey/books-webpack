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
  const {
    volumeInfo: {
      publisher,
      publishedDate,
      description,
      imageLinks,
      title,
      infoLink,
    },
  } = detailedData;
  return (
    // <Collapse in={detailedData} timeout="auto" unmountOnExit>
    detailedData && (
      <Card sx={{ maxWidth: 480 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              imageLinks.medium || imageLinks.small || imageLinks.thumbnail
            }
            alt={title}
          />
          <CardContent>
            {publisher && (
              <Typography gutterBottom variant="h5" component="div">
                {publisher},{publishedDate}
              </Typography>
            )}
            {description && (
              <StyledDescriptionContainer>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {description}
                </ReactMarkdown>
              </StyledDescriptionContainer>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {serveLink(infoLink)}
          </Button>
        </CardActions>
      </Card>
    )
    // </Collapse>
  );
};
