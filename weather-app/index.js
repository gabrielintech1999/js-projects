let country = "";
let weather = null;
let msgError = false;

const textBox = document.getElementById("text-box");



async function getWeather() {
  const apiKey = "be7333a154937ee1b9131c3cf5221405";
  country = textBox.value.trim();

  if (country) {
    try {
      console.log(country);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
      );

      const data = await res.json();
      weather = data;
      console.log(weather);
    } catch (error) {
      console.log(error);
      msgError = true;
    }

    textBox.value = "";

    render();
  }
}

function render() {
  const container = document.getElementById("container");
  container.innerHTML = `
    
    <div  style="display: ${weather ? "block" : "none"};">
        <div>Name: ${weather.name}</div>
        <div>Description: ${weather.weather[0].description}</div> 
        <div>Temperature: ${(weather.main.temp - 273).toFixed(2)}ºC</div> 
        <div>Humidity: ${weather.main.humidity}%</div> 
        <div>wind speed: ${weather.wind.speed}m/s</div> 
    </div>

    <div style="display: ${msgError ? "block" : "none"}; color: red ;" >
        <div>City not found. Please try again.</div> 
    </div>`;
}

textBox.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      console.log(e.code);
  
      getWeather();
    }
  });
