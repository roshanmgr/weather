<?php
//create the connection
$conn = mysqli_connect("localhost", "root","", "weather");

//query
$sql = "SELECT *
FROM weatherdata
";

//run the query
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Weather Data</title>
    <style>
        body {
            background: red;
            font-family: 'Poppins', sans-serif;
            width: 100%;
            height: 100vh;
            /* display: flex; */
            justify-content: center;
            align-items: center;
        }
        

        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
        }
    </style>

</head>

<body>
    <h1>Weather Data</h1>
    <table>
        <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
            <th>Windspeed</th>
            <th>Datetime</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td><?php echo $row['city']; ?></td>
                <td><?php echo $row['temperature']; ?></td>
                <td><?php echo $row['humidity']; ?></td>
                <td><?php echo $row['pressure']; ?></td>
                <td><?php echo $row['windspeed']; ?></td>
                <td><?php echo $row['Curdate']; ?></td>
            </tr>
        <?php } ?>
    </table>
    <button id="return"><a href="i.php">Return</a></button>
</body>

</html>