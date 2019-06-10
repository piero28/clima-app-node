const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.latitude, coordenadas.longitude);
        return `El clima de ${coordenadas.direccion} es de: ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de: ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);
