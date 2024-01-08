const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = 'c8c15a9b2ed5d84385700f7617b03b67';

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;
    const weather = {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
    };

    res.render('index', { weather, error: null });
  } catch (error) {
    res.render('index', { weather: null, error: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
