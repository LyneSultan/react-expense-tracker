<?php

include "connection.php";

$id = $_GET['id'];

$query = $connection->prepare("DELETE FROM transactions WHERE id=?");
$query->bind_param("i", $id);
$query->execute();
if ($query->affected_rows > 0) {
    echo json_encode(["message"=>"Transaction deleted successfully!"]);
} else {
  echo json_encode(["message"=>"Error"]);
}
?>
