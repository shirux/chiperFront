import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../SearchForm/SearchForm'
import SearchResult from '../SearchResult/SearchResult'
import foodTruckAPI from '../../Api/foodTrucks'
import validator from '../../utils/validator'
import './Search.css';






    

class Search extends Component {

    state = {
        foodTrucks: [],
        firstSearch: true,
        isValidResult: true
    }

    async handleSearchForm(longitud, latitud) {
        if ((validator.isValid(longitud, latitud))) {
            try {
                let results = await foodTruckAPI.fetchData(longitud, latitud);
                this.setState({
                    foodTrucks: results,
                    isValidResult: true
                })
            } catch(err) {
                this.setState({
                    foodTrucks: [],
                    isValidResult: true
                })
            }
            
        } else {
            this.setState({
                isValidResult: false
            })
        }
        if (this.state.firstSearch) {
            this.setState(prevState => {
                return {
                    firstSearch: !prevState.firstSearch
                }
            })
        }
    }

    render() {
        return (
            <Grid container component="main" className="SearchRoot">
                <SearchForm 
                    longitud={this.longitudInput}
                    latitud={this.latitudInput}
                    searchFoodTrucks={this.handleSearchForm.bind(this)}
                />
                <SearchResult 
                    foodTrucks={this.state.foodTrucks}
                    showImage={this.state.firstSearch}
                    isValid={this.state.isValidResult}
                />         
            </Grid>
          );
    }
       
}

export default Search;