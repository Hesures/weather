const key = "202cd3452d077d590157f2076ca44649&lang=es";
const grades = "&units=metric";
const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + key + grades;


const weatherContainer = document.querySelector("#weatherContainer");
const imgContainer = document.querySelector(".imgContainer");

fetch(url)
.then(respuesta => respuesta.json())
.then(datos => {
    // console.log (datos.city.name);    // En este caso, me devuelve un objeto (no un array)... 
    // console.log(datos.list[0].weather[0].description);  // ...  al que puedo sañadir información de la respuesta recibida en función de lo que quiero que aparezca
    // console.log(datos.list[0].main.temp);

    var city = datos.city.name;
    var weatherDescription = datos.list[0].weather[0].description;
    var temperature = datos.list[0].main.temp;
    var iconCode = datos.list[0].weather[0].icon;

    var urlImg = `https://openweathermap.org/img/wn/` + iconCode + `@2x.png`
    imgContainer.innerHTML=`<img src="` + urlImg + `">`;

    var h3 = document.createElement("h3");
    h3.innerHTML = `El tiempo en ${city} presenta ${weatherDescription} y una temperatura de ${temperature}ºC`;
    weatherContainer.appendChild(h3);
    
})