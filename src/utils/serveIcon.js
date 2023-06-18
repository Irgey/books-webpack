import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const serveIcon = name => {
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
