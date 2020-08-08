import axios from 'axios';

const url = 'https://gem-resisted-hallway.glitch.me/api';


const foodTruckAPI = {
    
    fetchData: async (longitud, latitud) => {
        let endpoint = `/searchRoutes/?x=${longitud}&y=${latitud}`

        console.log(`${url}${endpoint}`)
        try {
            const foodTrucks = await axios.get(`${url}${endpoint}`);
            if(foodTrucks) return foodTrucks.data;
            return []
        } catch(err) {
            return {"error" : err}
        }
    }
}

export default foodTruckAPI