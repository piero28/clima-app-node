const axios = require('axios');

const getClima = async (latitude, longitude) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8fdcb21a15c0524f8e998a59f1a4219f&units=metric`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}