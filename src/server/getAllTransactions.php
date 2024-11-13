<?php
include "connection.php";

$query=$connection->prepare("SELECT * FROM transactions ");
  $query->execute();
  $result = $query->get_result();


  if($result->num_rows >0){
      $allTransactions=[];

    while($row=$result->fetch_assoc()){
      $allTransactions[]=$row;
    }
    echo json_encode($allTransactions);
  }
  else{
    echo "empty table";
  }
