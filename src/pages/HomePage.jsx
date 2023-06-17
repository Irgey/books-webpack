import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BookPic } from '../images/book.svg';
import styled from '@emotion/styled';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <StyledContainer>
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
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
