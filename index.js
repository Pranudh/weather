const form = document.getElementById("form");
const latitudeinput = document.getElementById("latitude");
const longitudeinput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiresult = document.getElementById("aqi");
const coresult = document.getElementById("co");
const no2result = document.getElementById("no2");
const o3result = document.getElementById("o3");
const pm2result = document.getElementById("pm2");
const pm10result = document.getElementById("pm10");
const so2result = document.getElementById("so2");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latitude = latitudeinput.value;
    const longitude = longitudeinput.value;
    console.log(latitude);
    console.log(longitude);
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '44381781e4mshc6455b91c2517a2p1121f6jsn590cfdf09739',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            let readings=result.data[0]
            console.log(readings);
            aqiresult.textContent=readings.aqi;
            coresult.textContent=readings.co;
            no2result.textContent=readings.no2; 
            o3result.textContent=readings.o3; 
            pm2result.textContent=readings.pm2; 
            pm10result.textContent=readings.pm10; 
            so2result.textContent=readings.so2;
            resultContainer.style.display='flex';
        })
});