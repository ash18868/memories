import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

// Styled Components
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  marginLeft: '15px',
  height: '60px',
}));
