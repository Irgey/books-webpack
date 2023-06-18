import styled from '@emotion/styled';
import { Container, Link, Box } from '@mui/material';

export const StyledFooter = styled(Box)`
  width: 100%;
  height: 120px;
  background-color: #1976d2;
  display: flex;
  align-items: center;
`;
export const StyledSocialsList = styled.ul`
  display: flex;
`;
export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 300ms ease;
  &:hover {
    background-color: #1d86ef;
  }
`;
