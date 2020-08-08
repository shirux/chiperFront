import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoodTruckCard from '../FoodTruckCard/FoodTruckCard'
import './SearchResult.css';

const SearchResult = ({showImage, foodTrucks, isValid}) => {

    if (!isValid) {
        return <Grid item xs={true} sm={4} md={7}> <h1>Por favor ingrese coordenadas en números!</h1></Grid>;
    } else if (!showImage) {
        if(foodTrucks.length > 0) {
            return (
                <Grid item xs={true} sm={4} md={7}>
                    {foodTrucks.map(truck => 
                        <FoodTruckCard 
                            key={truck.objectid}
                            name={truck.applicant}
                            address={truck.address}
                            foodItems={truck.fooditems}
                        />
                    )}
                </Grid>
            )
        } else {
            return <Grid item xs={true} sm={4} md={7}> No hay resultados! busca nuevamente! </Grid>
        }
    } else {
        return (
            <Grid item xs={false} sm={4} md={7} className="ResultImages"/> 
        )
    }
}

export default SearchResult