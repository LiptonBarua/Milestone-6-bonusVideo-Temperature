
const api_key = `35ca733ad8c611169d503f206972c482`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setinnerTextId = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}

const displayTemperature = (data) => {
    console.log(data);
    setinnerTextId('temperature', data.main.temp)
    setinnerTextId('clouds', data.weather[0].description)
}


document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const searchFieldValue = searchField.value;

    searchField.value = ''
    document.getElementById('city').innerText = searchFieldValue;
    loadTemperature(searchFieldValue)
})
