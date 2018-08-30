<?php

$id = $_GET['id'];

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "sweettreats";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

$sql = "SELECT * FROM selections WHERE selection_id=$id";

$result = $conn->query($sql);

if ($result->num_rows > 0) {

while($row = $result->fetch_assoc()) {

header('content-type: image/png');

echo $a=$row['selection_picture'];

echo base64_decode($a); 

}

}

$conn->close();

?>

