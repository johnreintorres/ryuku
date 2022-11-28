<?php
$recaptcha = $_POST['g-recaptcha-response'];
$res = reCaptcha($recaptcha);
if(!$res['success']){
  // Error
}
  if (isset($_POST['submit'])) {
    $from =$_POST['email'];
    $to = "john.torres@fgsp.ph";
    $inquirer = $_POST['email'];
    $subject = 'Cashless';
    $headers = array(
        "From: {$from}",
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=utf-8",
    );
    $message =$_POST['remarks'];
    mail($to, $subject, $message, implode("\r\n", $headers));
    header("Location: index.php");
  }


function reCaptcha($recaptcha){
  $secret = "6Ld2aGgaAAAAAHa6nQ4ey-67ptvBpvSY7KS1oRB8";
  $ip = $_SERVER['REMOTE_ADDR'];

  $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
  $data = curl_exec($ch);
  curl_close($ch);

  return json_decode($data, true);
}
?>