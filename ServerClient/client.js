let baseUrl = 'http://api.animalinfo.org/data/?animal=';
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const favFact = document.getElementById('fav').value;
   //faking an api call
    getAnimal('/fakeAnimalData')
    //new syntax
    .then(function(data){
          console.log(data)
    //add data to post request
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav: favFact});
    })
   .then(
     updateUI()
   )
}

const getAnimal = async(url) => {

const res = await fetch(url)

try {

  const data = await res.json();
  console.log(data)
  return data;
}  catch(error) {
  console.log("error", error);
  // appropriately handle the error
}
} 

const postData = async(url ='', data={}) => {
      const response = await fetch(url, {
        method: 'POST',
        credential: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      try{
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error){
        console.log(error, 'error')
      }

};

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData)
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}