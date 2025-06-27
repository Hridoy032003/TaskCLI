// weather.js
import axios from 'axios';




const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherstack.com/current?access_key=d4eb9f29265742ad2911bb8861a4114f&query=${city}`);
        console.log(response.data);
    } catch (error) {
        console.log("Error fetching weather data:", error.message);
    }
}

export const weather = async (rl) => {
    return new Promise((resolve) => {
        rl.question("Enter city: ", async (city) => {
            await fetchWeather(city);
            resolve();
        });
    });
};
