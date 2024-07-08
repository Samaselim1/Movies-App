import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';

const primaryColor = 'dodgerblue';

export const MoviesList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
});

export const MovieItem = styled('li')({
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
  padding: '20px',
});

export const MovieImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px 10px 0 0',
  borderBottom: '2px solid #ddd',
});

export const MovieTitle = styled('h3')({
  fontSize: 20,
  lineHeight: 1.3,
  margin: '10px 0',
  color: '#222',
});

export const MovieText = styled('p')({
  fontSize: 16,
  margin: '8px 0',
  color: '#555',
});

export const ButtonBase = styled(Button)({
  cursor: 'pointer',
  color: 'white',
  backgroundColor: 'dodgerblue',
  padding: '8px 12px',
  borderRadius: '4px',
  marginTop: 10,
  border: 'none',
});

export const ReadMore = styled(ButtonBase)({
  backgroundColor: primaryColor,
  marginTop: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  '&:hover': {
    backgroundColor: primaryColor, }
});

export const ReadLess = styled(ButtonBase)({
  // backgroundColor: 'dodgerblue',
  padding: '8px 12px',
  borderRadius: '4px',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  backgroundColor: primaryColor,
  '&:hover': {
    backgroundColor: primaryColor,}
});

export const WatchButton = styled(ButtonBase)({
  backgroundColor: 'dodgerblue',
  padding: '8px 12px',
  borderRadius: '4px',
  marginTop: 10,
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  marginLeft: 'auto',
});

export const SearchInput = styled(TextField)({
  width: '100%',
  marginBottom: '20px',
  backgroundColor:'antiquewhite',
});
