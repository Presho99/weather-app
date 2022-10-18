# Weather Application

## API Used:
- https://www.weatherapi.com/
End points:
-http://api.weatherapi.com/v1/forecast.json?key=f2397f2d2d31453d8a2182757222907&q=location&aqi=yes

## Video Link
https://youtu.be/WL0_HY5lTcI

## Application Description
- The weather application is made up of five main components: Home, Weather, Forecast, Clock, and Navbar.
### 1. Home page 
- Contains three buttons that each route to their respective pages.
![Screenshot from 2022-10-18 14-47-58](https://user-images.githubusercontent.com/73560150/196421965-c6cdc945-b1bc-46cc-a79b-b8426f9726aa.png)

### 2. Navbar 
- Appears on the Weather, Forecast and Clock pages but not on the Home page.
- Contains a search bar that displays options after inputing at least 3 characters
### 3. Weather Page
- Displays the current temperature in Celsius and the date. On the side, there are other weather details such as wind speed, visibility, humidity, and precipitation. 
- The background image on the page changes based on the weather of the different searched cities. 
- There is also a weather icon on the page that changes to match the weather description at the time.
![Screenshot from 2022-10-18 14-48-11](https://user-images.githubusercontent.com/73560150/196422249-8e25f36e-617a-493d-85a3-695585c1e0be.png)

### 4. Forecast 
-Contains three sections:
- A main that shows the current weather of the searched city. This section displays the city's name and by default the city's temperature. At the bottom of that section is a navigation bar containing icons that represent different weather details. There is also a favorite button that when clicked adds to the user's favorite cities.
- A second section that displays weather prediction for the next four hours for the different searched cities.
- A bottom section that displays only three cities that the user may have added to favorites, while making use of GET and POST methods.
![Screenshot from 2022-10-18 14-58-35](https://user-images.githubusercontent.com/73560150/196423397-13da1e6c-2e85-43d0-b1ec-d4af528724c0.png)

### 5. Clock
- Shows the different times for the sunrise, sunset, moonrise, and moonset for any searched city.
![Screenshot from 2022-10-18 14-59-21](https://user-images.githubusercontent.com/73560150/196423581-ef84ff4c-93dc-47a7-af45-2626e0fa9a35.png)

