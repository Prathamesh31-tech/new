const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.getElementById("weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const weather_body=document.getElementById("weather-body");
const not_found=document.querySelector(".error");



async function checkweather(city){
        const api_key="4acb9f7ec24958746a00522b6ee9c06b";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;  
        const weather_data= await fetch(`${url}`).then(Response=>
            Response.json());
            
            if(weather_data.cod==='404'){
              not_found.style.display="flex";
              weather_body.style.display="none"; 
            }
            else{

              
        weather_body.style.display="flex";
        not_found.style.display="none";
        temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
        description.innerHTML=`${weather_data.weather[0].description}`;
        humidity.innerHTML=`${weather_data.main.humidity}%`;
        wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;
       
        switch(weather_data.weather[0].main){
                  case 'Clouds':
                weather_img.src='cloudy.png';
                break;   
                  case 'Clear':
                weather_img.src='clear.png';
                break;
                  case 'Rain':
                weather_img.src='rain.png';
                break;
                  case 'Mist':
                weather_img.src='mist.png';
                break;
                  case 'snow':
                weather_img.src='snow.png';
                break;
        }

            }


        
    }     

searchBtn.addEventListener('click',()=>{
        checkweather(inputBox.value);
});