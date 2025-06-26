// weather.js
import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherstack.com/current?access_key=d4eb9f29265742ad2911bb8861a4114f&query=${city}`);
        console.log(response.data);
    } catch (error) {
        console.log("Error fetching weather data:", error.message);
    }
}

export const weather = async () => {
    return new Promise((resolve) => {
        rl.question("Enter city: ", async (city) => {
            await fetchWeather(city);
            resolve();
        });
    });
};
