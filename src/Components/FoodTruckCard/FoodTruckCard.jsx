import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './FoodTruckCard.css'

const FoodTruckCard = ({name, address, foodItems}) => {

    return (
        <Card className="cardRoot" raised="true">
          <CardContent>
            <Typography className="cardTitle" color="textSecondary" gutterBottom>
                {address}
            </Typography>
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            <Typography className="cardPos" color="textSecondary">
                {foodItems}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default FoodTruckCard

