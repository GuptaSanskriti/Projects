/* Global Variables */
const geoNameApi_key = 'sanskriti';
const weatherbitApi_key = '1613a45182184f6789fb10b35db62e04';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault()
    const query = document.getElementById('city').value;
    const warning = document.querySelector('.warning');
    const departureDate = document.querySelector('.depart').value;
    const returnDate = document.querySelector('.return').value;

    let d = new Date();
    const daysTilldepart = Math.floor(
    (new Date(departureDate).getTime() - d.getTime()) / (1000 * 3600 * 24) );

    const lengthOfTrip = Math.ceil(
     (new Date(returnDate).getTime() - new Date(departureDate).getTime()) / (1000 * 3600 * 24));   
     
     document.querySelector('.tripInfo').innerHTML = `Your trip is ${daysTilldepart} days away 
     <br> Your trip will last for ${lengthOfTrip} days`;

            console.log(`city name: ${query}`);
            getDatafromGeonames(query)
                .then((data) => {
                    console.log(data);
                    postData('http://localhost:8081/geonames', { 
                        latitude: data.geonames[0].lat,
                        longitude: data.geonames[0].lng,
                        country: data.geonames[0].countryName,
                    });
                })
                .then((res =>{
                    const lat = res[res.length - 1].latitude
                    const lng = res[res.length - 1].longitude
                    return { lat, lng}
                }))
                .then(({lat, lng}) => {
                    return getDatafromWeatherbit(lat, lng)
                })
                .then((weatherData) => {
                    postData('http://localhost:8081/weatherbit', {
                        high: weatherData.data[0].high_temp,
                        low: weatherData.data[0].low_temp,
                        description: weatherData.data[0].weather.description,
                    })
                })
            }
    
    
//get data from geonames
const getDatafromGeonames = async (query) => {
    const url = `http://api.geonames.org/searchJSON?q=${query}&maxRows=1&username=${geoNameApi_key}`
    const res = await fetch(url)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error, 'Geonames error');
    }
}

//get weather data
const getDatafromWeatherbit  = async (lat, lng) => {
    const url = `http://api.weatherbit.io/v2.0/current?key=${weatherbitApi_key}&lat=${lat}&lon=${lng}`
    const res = await fetch(url)
    try {
        const data = await res.json();
        return data;
    } catch (error){
        console.log(error, 'weatherbit error');
    }
}

//Async POST
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/data');
    try {
        const allData = await request.json();
        console.log(allData)
    } catch (error) {
        console.log("error", error);
    }
}

const changeUI = () => {
    /*document.getElementById('zip').value = '';
    document.getElementById('feelings').value = '';*/
}

export{getDatafromGeonames}
export{performAction}
export{postData}
export{updateUI}
export{changeUI}
