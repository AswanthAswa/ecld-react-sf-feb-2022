
window.addEventListener('load', function(){
    var btn=document.getElementById('btn');
    btn.addEventListener('click', getWeather);
})


function getWeather(){
    var city= document.getElementById('city').value;
    var xhr= new XMLHttpRequest();
    xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab5b1ee43034d1cc574e18d953df887a` );
    //xhr.setRequestHeader('content-type','application/json; charset=utf-8');
    xhr.send();
    xhr.onload = function(){
        // console.log(JSON.parse(this.response));
        
        var response=JSON.parse(this.response);
        var result= document.getElementById('result');
        var cityName= document.createElement('h1');
        cityName.innerHTML=response.name;
        var status= document.createElement('p');
        status.innerHTML=  response.weather[0].description;
        var temperature= document.createElement('h2');
        temperature.innerHTML= Math.round(response.main.temp - 273.15)+  " &#8451;";
        var hum= document.createElement('p');
        hum.innerHTML= 'Humidity: ' + response.main.humidity + ' %';
        console.log(response.main.temp)
        
        
        result.append(cityName, status,temperature,hum);

        }
    }
    
