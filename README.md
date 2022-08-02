# Weather Application

## API Used:
https://www.weatherapi.com/
End points:
-http://api.weatherapi.com/v1/forecast.json?key=f2397f2d2d31453d8a2182757222907&q=location&aqi=yes

## Video Link
https://youtu.be/WL0_HY5lTcI

## Application Description
- The weather application is made up of five main components: Home, Weather, Forecast, Clock, and Navbar.
### Home page 
- Contains three buttons that each route to their respective pages.
### Navbar 
- Appears on the Weather, Forecast and Clock pages but not on the Home page.
- Contains a search bar that displays options after inputing at least 3 characters
### Weather 
- Displays the current temperature in Celsius and the date. On the side, there are other weather details such as wind speed, visibility, humidity, and precipitation. 
- The background image on the page changes based on the weather of the different searched cities. 
- There is also a weather icon on the page that changes to match the weather description at the time.
### Forecast 
-Contains three sections:
i)A main that shows the current weather of the searched city. This section displays the city's name and by default the city's temperature. At the bottom of that section is a navigation bar containing icons that represent different weather details. There is also a favorite button that when clicked adds to the user's favorite cities.
ii)A second section that displays weather prediction for the next four hours for the different searched cities.
iii)A bottom section that displays only three cities that the user may have added to favorites, while making use of GET and POST methods.
### Clock
- Shows the different times for the sunrise, sunset, moonrise, and moonset for any searched city.
