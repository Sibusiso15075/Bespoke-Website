<?php
// This file is for handling product-related backend operations like getting the prices,images,descriptions etc
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header(header: 'Content-Type: application/json');

//connect to database

try {
    $conn = mysqli_connect(
        $servername = "localhost",
        $username = "root",
        $password = "",
        $dbname = "bespoke",
    );
}
//error if to the DB fails
catch (Exception $e) {
    error_log(message: "Connection failed: " . $e->getMessage());
}
//fix and understand the code below better
// Fetch products from the database

$sql = "SELECT Product_ID , Product_Name , Price , Product_Description , Product_Image , Category FROM products";
$result = mysqli_query($conn, $sql);

$products = [];
mysqli_close($conn);

//loop to loop through every part of DB
// if ($result && mysqli_num_rows($result) > 0) {
//     while ($row = mysqli_fetch_assoc($result)) {
//         $products[] = $row;

//     }
// }

$str = "{content:[";
if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $str .= json_encode($row, flags: JSON_PRETTY_PRINT) . ",\n";
    }

}
$str .= "]}";

//send the data as a json object(creating an api endpoint)
// echo json_encode(value: $products, flags: JSON_FORCE_OBJECT);
echo $str;







?>