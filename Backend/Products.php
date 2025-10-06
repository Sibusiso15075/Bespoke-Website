<?php
// This file is for handling product-related backend operations like getting the prices,images,descriptions etc

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bespoke";
//connect to database

try {
    $conn = mysqli_connect(
        hostname: $servername,
        username: $username,
        password: $password,
        database: $dbname
    );
}
//error if to the DB fails
catch (Exception $e) {
    error_log(message: "Connection failed: " . $e->getMessage());
}
//fix and understand the code below better
// Fetch products from the database

$sql = "SELECT Product_ID, Product_Name, Price, Product_Description,Product_Image FROM products";
$result = $conn->query($sql);

$products = [];
//loop to loop through every part of DB
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}
//send the data as a json object(creating an api endpoint)
header('Content-Type: application/json');
echo json_encode($products);

$conn->close();






?>