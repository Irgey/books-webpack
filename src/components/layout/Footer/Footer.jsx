import { Typography } from '@mui/material';

import socials from '../../../data/socials.json';
import {
  StyledContainer,
  StyledFooter,
  StyledLink,
  StyledSocialsList,
} from './Footer.styled';
import { serveIcon } from 'utils/serveIcon';
export const Footer = () => {
  return (
    <StyledFooter component="footer">
      <StyledContainer maxWidth="xl">
        <Typography sx={{ color: 'white' }}>
          &#169; 2023 Serhii Parfentiev
        </Typography>
        <StyledSocialsList>
          {socials.map(social => (
            <li>
              <StyledLink
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                {serveIcon(social.name)}
              </StyledLink>
            </li>
          ))}
        </StyledSocialsList>
      </StyledContainer>
    </StyledFooter>
  );
};
