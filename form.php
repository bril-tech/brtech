<?php 
    if($_SERVER['REQUEST_METHOD']) {    
// die("hello");
        $from_email		 = 'keywordi@in-pun-ln-srv139.advancedserverdns.com';
        $recipient_email = 'r78777099@gmail.com, srspowerandservices@gmail.com';
        
    
        //Load POST data from HTML form
    
        $fname = $_POST["f-name"];
        $lname = $_POST["l-name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $subject = $_POST["subject"];
        $customer_msg	 = $_POST["message"];
    
        if(!empty($fname) && !empty($lname) && !empty($email) && !empty($phone) && !empty($subject) && !empty($customer_msg)) {
    
            $email_subject = "Enquiry for SRS Power India";
            $headers .= "From:".$from_email."\r\n";
            $headers .= "Reply-To: ".$recipient_email."\r\n";
            $body .= "First Name: " .$fname."\n";
            $body .= "Last Name: " .$lname."\n";
            $body .= "Email: " .$email."\n";
            $body .= "Phone: " .$phone."\n"; 
            $body .= "Subject: " .$subject."\n";  
            $body .= "Message: " .$customer_msg."\n";		
    
            $sentMailResult = mail($recipient_email, $email_subject, $body, $headers);

            //var_dump($sentMailResult);die;
    
            if($sentMailResult ){
                header('Location: https://www.srspowerindia.com/');
            }
    
            else{
                echo "<script>
                    alert('Please Try Again')
                </script>";
            }
    
        } else{
            header('Location: https://www.srspowerindia.com/');
        }
    }
