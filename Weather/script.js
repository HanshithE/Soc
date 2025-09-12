/* console.log("=== Hour 1: JSON Basics ---");

let student = {
    name: "Ituku",
    age: 20,
    marks: [85, 90, 78]
};

let jsonString = JSON.stringify(student);
console.log("JSON String: ", jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("Parsed object: ", parsedObj);

let books = [
    { title: "book1", author: "author1", price: 2020 },
    { title: "book2", author: "author2", price: 2021 },
    { title: "book3", author: "author3", price: 2022 }
];
console.log("Book List: ", books.map(b => b.title));

console.log("=== Hour 2: AJAX with fetch ---");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log("Fetched Data: ", data))
  .catch(error => console.error("Error fetching data: ", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    let output = "<h3>Users List</h3><ul>";
    users.forEach(user => {
      output += `<li>${user.name} (${user.email})</li>`;
    });
    output += "</ul>";
    document.body.innerHTML += output;
  });*/

const cityCoords = {
  bangalore: { lat: 12.9716, lon: 77.5946 },
  delhi: { lat: 28.61, lon: 77.1025 },
  mumbai: { lat: 19.0760, lon: 72.8777 },
  london: { lat: 51.5074, lon: -0.1278 },
  newyork: { lat: 40.7128, lon: -74.0060 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "City not in list";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>Temp: ${data.current_weather.temperature}°C</p>
          <p>Wind: ${data.current_weather.windspeed} km/h</p>
          <p>Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "No data available";
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("weather").innerHTML = "Error fetching data";
    });
});
