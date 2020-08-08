import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link'
import './SearchForm.css';

class SearchForm extends Component {

    state = {
        longitud: "",
        latitud: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        const { latitud, longitud } = this.state;
        this.props.searchFoodTrucks(longitud, latitud);
    }

    handleChange = e => {
        const property = e.target.id
        this.setState({
            [property]: e.target.value
        }) 
    }

    setDefaultValues = () => {
        this.setState({
            longitud: "-122.397726709152",
            latitud: "37.7875398934675"
        })
    }

    render() {
        return (
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className="SearchFormPaper">
                <Avatar className="SearchFormAvatar">
                    <SearchIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ubica tus coordenadas
                </Typography>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="longitud"
                        name="longitud"
                        variant="outlined"
                        required
                        fullWidth
                        id="longitud"
                        label="Longitud"
                        autoFocus
                        value={this.state.longitud}
                        onChange={this.handleChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="latitud"
                        label="Latitud"
                        name="latitud"
                        autoComplete="latitud"
                        value={this.state.latitud}
                        onChange={this.handleChange}
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="SearchFormSubmit"
                >
                    Buscar carritos de comida
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#"><p onClick={this.setDefaultValues}> Cliquee aqui para introducir valores por defecto </p></Link>
                    </Grid>
                </Grid>
                </form>
            </div>
              </Grid>
        );
    }
}

export default SearchForm