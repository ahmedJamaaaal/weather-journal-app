const postReq = async (url='', data = {})=>{

    console.log(data);
    const response = await fetch (url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch(error){
        console.log('error', error);
    }
}

////
app.post(’/add’, callBack);

function callBack(request,response){

response.send(‘POST received’);

console.log(request.body);

newData = {

temp: request.body.temp,

date: request.body.date,

content: request.body.content,
}

projectData.push(newData);

}
temperature
date
user response
/**
 * let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
 */

/**
 * <label for="animal">Enter the name of your favorite animal</label>
<input id="animal" name="animal">
<textarea id="favorite" placeholder="Enter your favorite thing about your favorite animal" rows="9" cols="50"></textarea>
<button id = "generate">GO</button>


 * document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}
 */

getAnimal('/animalData',)
// New Syntax!
.then(function(data){
  // Add data
  console.log(data);
  postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
})
.then(
  //updateUI()
).catch( console.log(error))

