<?php

//use this to run it locally: php -S localhost:8000

use PHPMailer\PHPMailer\SMTP;
$subject = $_POST['subject'];
$first = $_POST['first'];
$last = $_POST['last'];
$name = $first . ' ' . $last;
$email = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$schedule = $_POST['schedule'];
$message = $_POST['message'];

$content = 
'full name: ' . $name . "\n". 
'email address: ' . $email . "\n".
'phone number: ' . $phone . "\n";

if (isset($budget)) {
  $content .= 'budget: $' . $budget . "\n";
}
if (isset($schedule)) {
  $content .= 'schedule: ' . $schedule . "\n";
}
$content .= $message;



require 'vendor/autoload.php'; // Include the PHPMailer autoloader

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Configure the SMTP settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'insert smtp email here';
$mail->Password = 'insert smtp password here';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;


// Set the email details
$mail->setFrom($email, $name);
$mail->addAddress('insert receiver email here', 'insert receiver name here');
$mail->Subject = $subject . " | " . $name;
$mail->Body = $content;



// Send the email
if ($mail->send()) {
  echo "Email sent successfully!";
} else {
  echo "Failed to send email. Error: " . $mail->ErrorInfo;
}

?>