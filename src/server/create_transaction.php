<?php
include "connection.php";
  $title = $_POST['title'];
  $amount = $_POST['amount'];
  $type=$_POST['type'];
  $date=$_POST['date'];
  $note=$_POST['notes'];

  $query = $connection->prepare("INSERT INTO transactions (title, amount, type, date, notes) VALUES (?, ?, ?, ?, ?)");

  $query->bind_param("sdsss", $title, $amount, $type, $date, $notes);

  if ($query->execute()) {
      echo json_encode([
        "message"=>"Transaction Inserted",
      ]);
  } else {
    echo json_encode([
      "message"=>"Error n the inserttion",
    ]);
  }

?>
