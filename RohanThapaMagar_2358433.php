<?php
//create the connection
$conn = mysqli_connect("localhost","root","","weather");
//fetch from api
$json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=York&appid=5ed63b06a659639575821c6da9811d30");
//convert into json format
$data = json_decode($json_data,true);
//access the data 
$city = $data['name'];
$temperature = $data['main']['temp'];
$humidity = $data['main']['humidity'];
$wind_speed =$data['wind']['speed'];
$pressure = $data['main']['pressure'];
$timestamp = $data['dt'];
$date = gmdate("Y-m-d\TH:i:s\Z", $timestamp);
$temp = $temperature - "273.15";
//query 
// $sql = "SELECT * from weatherdata were `city` = '$city' and date('date') = curdate()";
// $result = mysqli_query($conn,$sql);
// if(mysqli_num_rows($result)>0){
//     $sql = "UPDATE weatherdata set 'temperature'='$temperature', 'humidity'='$humidity', 'pressure'='$pressure','windspeed','$wind_speed' where 'city'='$city' and 'date' = DATE_FORMAT(NOW(),'%Y-%m-%d";

// }else{
//     $sql = "INSERT INTO weatherdata(city,temperature,humidity,windspeed,pressure,Curdate) VALUES('$city','$temp','$humidity','$wind_speed','$pressure','$date')";
// }
$sql = "INSERT INTO weatherdata(city,temperature,humidity,windspeed,pressure,Curdate) VALUES('$city','$temp','$humidity','$wind_speed','$pressure','$date')";

//run the query
mysqli_query($conn,$sql);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="RohanThapaMagar_2358433.css">
</head>

<body>
    <div class="main-container">
        <div class="container top">
            <h1>Weather App</h1>
            <form action="weather.php" onsubmit="return false">
                <input type="text" value="York" class="search" placeholder="Enter the City Name">
                <button type="submit" class="btn">Submit</button>
                <p class="error"></p>
            </form>
            <div class="savebutton">
            <section>
                <div class="container">
                    <div class="icon">
                        <img src="" alt="" class="weather-icon">
                    </div>
                    <div class="location">
                        <div id="city" class="city">--</div>
                        <div class="date">--</div>
                    </div>
                    <div class="current">
                        <div id="temp" class="temp">Temp: Â°C</div>
                        <div id="weather" class="weather">Weather: </div>
                        <div id="temp-range" class="temp-range">Temp Range: C</div>
                        <div id="humidity" class="humidity">Humidity: %</div>
                        <div id="wind" class="wind">Wind: km/h</div>
                    </div>
            </section>
        </div>
        <form action="RohanThapaMagar_2358433_history.php" method="post">
        <button type="submit">View weather history</button>
      </form>
    </div>
    
    </div>

    <script src="RohanThapaMagar_2358433.js"></script>
</body>

</html>