import styled from '@emotion/styled';
import { Box, Typography, Container, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import socials from '../../../data/socials.json';
export const Footer = () => {
  console.log(socials);
  const serveIcon = name => {
    console.log(typeof name);
    const lowerName = name.toLowerCase();
    if (lowerName === 'github') {
      return <GitHubIcon sx={{ color: 'white' }} />;
    } else if (lowerName === 'linkedin') {
      return <LinkedInIcon sx={{ color: 'white' }} />;
    } else if (lowerName === 'telegram') {
      return <TelegramIcon sx={{ color: 'white' }} />;
    } else if (lowerName === 'facebook') {
      return <FacebookIcon sx={{ color: 'white' }} />;
    }
  };
  return (
    <StyledFooter component="footer">
      <StyledContainer>
        <Typography sx={{ color: 'white' }}>
          &#169; 2023 Serhii Parfentiev
        </Typography>
        <StyledSocialsList>
          {socials.map(social => (
            <StyledLink
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {serveIcon(social.name)}
            </StyledLink>
          ))}
        </StyledSocialsList>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)`
  width: 100%;
  height: 120px;
  background-color: #1976d2;
  display: flex;
  align-items: center;
`;
const StyledSocialsList = styled.ul`
  display: flex;
`;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const StyledLink = styled(Link)`
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
