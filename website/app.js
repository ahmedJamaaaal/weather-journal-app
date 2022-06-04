/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=688c5e4a9ee0829e062bd9d1858484f3&units=metric";
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);
/* Function called by event listener */
function performAction(e) {
  const zip = document.getElementById("zip");
  const feelings = document.getElementById("feelings");
  getWeatherApi(zip.value)
    .then((result) => {
      postData("/setData", {
        temperature: result.main.temp,
        data: newDate,
        userResp: feelings.value,
      }).then(() => {
        updateUI().then(() => {
          zip.value = "";
          feelings.value = "";
        });
      });
    })
    .catch((err) => {
      console.log(err);
      updateUIError(err);
    });
}

/* Function to GET Web API Data*/
const getWeatherApi = async (zipCode) => {
  const response = await fetch(baseURL + zipCode + apiKey);
  console.log(response);
  try {
    const newData = await response.json();
    console.log(newData);
    if (!response.ok) {
      return Promise.reject(newData.message);
    }
    return Promise.resolve(newData);
  } catch (error) {
    return Promise.reject(error.message);
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
    return Promise.resolve(newData);
  } catch (error) {
    return Promise.reject(error.message);
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
var newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// TODO

/**
 * update Ui => html Render
 */
const updateUI = async () => {
 
  const date = document.querySelector('#date');
  const temp = document.querySelector('#temp');
  const  content = document.querySelector('#content');

  const request = await fetch("/all");
  try {
    const data = await request.json();
    date.textContent  = `📅 Date :${newDate}`;
    temp.textContent  = '🌡 Temperature :'+ Math.round(data.temperature) +'°C';
    content.textContent  = `👏 Your Feeling :${data.userResp}`;
  } catch (error) {
    content.content  = `Error :${error}`;
  }
};
const updateUIError = (error) => {
  const  content = document.querySelector('#content');
  
  console.log(error);
  content.textContent  = `Error :${error}`;
};
