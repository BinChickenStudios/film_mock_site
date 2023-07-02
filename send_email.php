<?php

//use this to run it locally: php -S localhost:8000

use PHPMailer\PHPMailer\SMTP;
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

require 'vendor/autoload.php'; // Include the PHPMailer autoloader

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Configure the SMTP settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'insert SMTP email here';
$mail->Password = 'insert SMTP password here';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;


// Set the email details
$mail->setFrom($email, $name);
$mail->addAddress('Insert where the email should be sent to here');
$mail->Subject = $subject;
$mail->Body = $message;


// Send the email
if ($mail->send()) {
  echo "Email sent successfully!";
} else {
  echo "Failed to send email. Error: " . $mail->ErrorInfo;
}

?>