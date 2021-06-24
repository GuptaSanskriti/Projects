/* Global Variables */
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&units=imperial&APPID=1bce4fb3f8cafc10ab7f7cb3fa4bb9aa';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//get web API data
const getWeather = async (baseURL, zipCode, apiKey) => {
 const res = await fetch(baseURL+zipCode+apiKey)
 try{
     const data = await res.json();
     return data;
 }
 catch(error){
     console.log(error, 'error');
 }
}

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zipCode = document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;

console.log(`zip code value: ${zipCode}`);
getWeather(baseURL, zipCode, apiKey)
.then((data)=> {
    try{
        console.log(data);
        postData('/add', {date: newDate, temp: data.temp, feelings: feelings})
        updateUI();
  }
  catch(error) {
     console.error(error, 'error')
  }   
 })
};

//Async POST
const postData = async ( url = '', data = {})=>{

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
    }catch(error) {
      console.log("error", error);
    }
  };

  const updateUI = async () => {
    const req = await fetch('/all');
    try{
        const allData = await req.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Tempurature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.mood}`;
      }catch(error) {
        console.log("error", error);
      }
    }
    


