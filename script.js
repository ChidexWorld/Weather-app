const apiKey = CONFIG.API_KEY;

document.getElementById('content').classList.remove("d-flex");

//function to fetch weather data
function getWeather(params) {
    const city = document.getElementById('search').value;

    if (!city) return alert("Please enter a city name");

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`


    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("city is empty");
            return response.json();
        })
        .then(data => {
            console.log(data)

            let icon = data.current.condition.icon;
            let temperature = data.current.temp_c;
            let name_ = data.location.name;
            let humidity = data.current.humidity;
            let wind_speed = data.current.wind_kph;

            document.getElementById('image').src = `https://${icon}`
            document.getElementById('temp_c').innerHTML = `${temperature}&deg;C`;
            document.getElementById('name').innerHTML = name_;
            document.getElementById('humidity').innerHTML = humidity;
            document.getElementById('wind').innerHTML = wind_speed;


        })

    document.getElementById('content').classList.add("d-flex");
}

