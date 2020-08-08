import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Footer.css';


export default function StickyFooter() {

  return (
      <footer className="footer">
        <Container maxWidth="sm">
          <Typography className="footerText" variant="body1">Daniel Ramos - Chiper Test</Typography>
        </Container>
      </footer>
  );
}

