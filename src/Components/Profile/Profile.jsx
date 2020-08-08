import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './Profile.css';


const Profile = () => {

  return (
      <main>
        {/* Hero unit */}
        <div className="heroContent">
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                El Aplicante
            </Typography>
            <Container className="imageContainer">
                <img alt="Daniel Ramos" src="https://media-exp1.licdn.com/dms/image/C4D03AQGb9n4uqADoUA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=otvuxSeUp6H0YYiYLccKdx5qOJBCRU1sCHPsdqk1jag" className="image" />
            </Container>
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Daniel Ramos, Ingeniero de Software graduado de la Universidad de los Andes con inclinaciones por los emprendimientos y tecnologías que puedan cambiar, agilizar y facilitar el día a día de las personas.
                Conozco diferentes herramientas y lenguajes, lo cual me permite moverme en diferentes entornos laborales. En constante aprendizaje de nuevas herramientas y tecnologias
                que se usen en las tendencias de hoy en día. 
            </Typography>
            <div className="heroButtons">
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="https://github.com/shirux">
                    <Button variant="contained" color="primary">
                        Mi repositorio
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
  );
}

export default Profile;