const axios = require('axios');

const getLugarLatLong = async (direc) => {

    //Codificar PARAMETRO ENVIADO en base URL
    const encodedURL = encodeURI(direc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'X-RapidAPI-Key': '3d8fd05663mshb09ad08ffa41494p1f2fe8jsn1cc56fedbc43'}
      });
    
    const respuesta = await instance.get();
    if(Object.keys(respuesta.data.Results).length === 0){
        throw new Error(`No existen datos para direccion : ${direc}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        direccion,
        latitude,
        longitude
    }
}

module.exports = {
    getLugarLatLong
}






