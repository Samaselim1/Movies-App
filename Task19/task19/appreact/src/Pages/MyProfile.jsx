import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


function MyProfile() {
  return (
    <Container>
      <Title variant="h4" style={{ color: 'white', textAlign: 'center', margin: '20px' }}>My Profile</Title>
      <Content>
        Welcome to your Profile.
      </Content>
    </Container>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '20px',
});

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: 'antiquewhite',
});

const Content = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  color: 'antiquewhite',
});


export default MyProfile;
