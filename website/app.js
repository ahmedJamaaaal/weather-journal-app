/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=688c5e4a9ee0829e062bd9d1858484f3";
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);
/* Function called by event listener */
function performAction(e) {
  const zip = document.getElementById("zip");
  const feelings = document.getElementById("feelings");
  getApiData(zip.value).then((result) => {
    var tempCelsius= result.main.temp-273.15;
     tempCelsius= tempCelsius.toFixed();
    postData("/setData", {
      temperature:tempCelsius,
      data: newDate,
      userResp: feelings.value,
    })
      .then(() => {
        updateUI().then(() =>{
            zip.value="";
            feelings.value="";
        })
       
      })
      .catch(error => console.log(error));
  });
}

/* Function to GET Web API Data*/
const getApiData = async (zipCode) => {
  const response = await fetch(baseURL + zipCode + apiKey);
  try {
    const newData = await response.json();
    
    return newData;
  } catch (error) {
    return error;
  }
};
/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

/* Function to GET Project Data */
const getProjectData = async (url = "") => {
  const response = await fetch(url);
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// TODO

/**
 * update Ui => html Render
 */
const updateUI = async () => {
  const request = await fetch("/getData");
  try {
    const data = await request.json();
    document.getElementById("date").innerHTML = `📅 Date :${data.data}`;
    document.getElementById("temp").innerHTML = `&#127777; Temperature :${data.temperature} °C`;
    document.getElementById("content").innerHTML = `&#128079; Your Feeling :${data.userResp}`;
    
  } catch (error) {
    console.log("error", error);
  }
};
