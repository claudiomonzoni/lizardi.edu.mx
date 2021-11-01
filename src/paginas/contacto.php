<?php

// Fetching Values from URL.
$name = $_POST['name'];
$email = $_POST['email'];
$city = $_POST['city'];
$message = $_POST['message'];


$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$subject = $nombre;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:#000000;">Hi ' . $nombre . ',<br/>'
. '<br/>Contact from web site.<br/><br/>'
. 'Nombre:' . $name . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Phone:' . $phone . '<br/>'
. 'City:' . $city . '<br/>'
. 'Message:' . $message . '<br/>'
. '<br/>'
. '  .</div>';
$sendmessage = "<div style=\"background-color:#ffffff; color:#cccccc;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("info@weddingsinzihua.com", $subject, $sendmessage, $headers);
echo "Thanks for contacting us, we will respond as soon as possible";

} else {
echo "Invalid Email *</span>";
}
?>
