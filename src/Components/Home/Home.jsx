import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './Home.css';


const Home = () => {
  return (
      <main>
        <div className="heroContent">
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Chiper Test
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              En esta prueba se entrega tanto el BackEnd como el frontEnd.
              El Back funciona como un puente entre los request enviados por los usuarios
              y los datos que se almacenan en otro aplicativo. Hace las validaciones y traducciones
              correspondientes para poder brindar una respuesta al usuario.
              El front está hecho con material-ui, basandose en varios ejemplos
              que hay en el sitio oficial. Tiene sus componentes (stateless or stateful)
              para poder brindar una experiencia de navegación al usuario para buscar carros de comida.
            </Typography>
            <div className="heroButtons">
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <Link href='https://github.com/chiper-inc/coding-challenge'>
                        <Button variant="contained" color="primary">
                            Conozca la prueba
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

export default Home;