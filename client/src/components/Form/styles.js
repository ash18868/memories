import { styled } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';

// Styled Root Container for Form
export const StyledRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

// Styled Paper Component
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

// Styled Form Container
export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

// Styled File Input Container
export const StyledFileInput = styled('div')(({ theme }) => ({
  width: '97%',
  margin: '10px 0',
}));

// Styled Submit Button
export const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));

// Styled Clear Button
export const StyledButtonClear = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));