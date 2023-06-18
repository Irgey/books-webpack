import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledContainer, StyledSection } from './HomePage.styled';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {' '}
      <section>
        <StyledContainer maxWidth="xl">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Books Info
          </Typography>
          <Typography variant="h4" component="p" gutterBottom>
            Service for book lovers 🧐
          </Typography>
          <Button
            component="a"
            variant="contained"
            onClick={() => {
              navigate('/books');
            }}
          >
            Let's find something
          </Button>
        </StyledContainer>
      </section>
      <StyledSection>
        <Container maxWidth="xl">
          <Typography variant="h4" align="center" gutterBottom>
            Find your book
          </Typography>
          <Typography>
            Just type key word in search field and we will find for you books
            that inculdes this search query. You can see
          </Typography>
          <Typography>Our service uses Google books API</Typography>
        </Container>
      </StyledSection>
    </>
  );
};
