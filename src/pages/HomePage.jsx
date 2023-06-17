import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BookPic } from '../images/book.svg';
import styled from '@emotion/styled';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <StyledSection>
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
      <StyledBookPic fill="#1976d2" width={250} height={250} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledBookPic = styled(BookPic)`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
