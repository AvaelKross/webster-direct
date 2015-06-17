<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['name']))
		$errors['name'] =  'Введите имя';

	if (empty($_POST['email']))
		$errors['email'] = 'Email необходим.';

    if (empty($_POST['phone']))
		$errors['phone'] = 'Phone необходим';

// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors process our form, then return a message
        $to = 'savchyk.a@gmail.com';        
        $subject = 'Form Submission';
        $from = 'SomeForm';
        $msg .= "Name: ".$_POST['name']
             ."\n\n"."Email: ".$_POST['email']
             ."\n\n"."Phone: ".$_POST['phone']
             ."\n\n"."Business: ".$_POST['business'];
		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

        mail($to, $subject, $msg, "From: $from\r\nReply-To: $from\r\nReturn-Path: $from\r\n");
		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
	}

	// return all our data to an AJAX call
	echo json_encode($data);