<?php
while($row = mysqli_fetch_assoc($sql)){
  
  $sql2 = "SELECT * FROM messages WHERE (outgoing_msg_id={$row['unique_id']} OR incoming_msg_id={$row['unique_id']}) ORDER BY msg_id DESC LIMIT 1" ;
  $query2 = mysqli_query($con,$sql2);
  $row2 = mysqli_fetch_assoc($query2);
  if(mysqli_num_rows($query2)>0){
    $result = $row2['msg'];
  }else{
    $result = "No messages available";
  }
 (strlen($result)>26)?$msg=substr($result,0,26)."..." : $msg = $result;
  $ro = "";
 if(isset($row2['outgoing_msg_id'])){
  $ro = $row2['outgoing_msg_id'];
 }else{
  $ro = "";
 }
 
 ($outgoing_id == $ro)?$you = "You : ":$you="";
 ($row['status'] === 'offline now')?$offline='offline':$offline="";
    $output .= "   <a href='chat.php?user_id={$row['unique_id']}'>
                    <div class='content'>
                        <img src='profiles/{$row['img']}'alt=''>
                         <div class='details'>
                            <span>".$row['fname']." ".$row['lname']."</span>
                            <p>".$you.$msg."</p>
                       </div>
                    </div>
                    <div class='status-dot {$offline}'><i class='fa-solid fa-circle'></i></div>
                    </a>";
    
    }