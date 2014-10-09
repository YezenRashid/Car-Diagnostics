<?php
    // Takes the sign up information of the user.
    
    include("sql.php");

    if(isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["phonenumber"]) 
        && isset($_POST["address"]) && isset($_POST["licenseplate"]) && isset($_POST["insurance"])
        && isset($_POST["policynumber"]) && isset($_POST["email"])) {
        echo "<div>All Info!</div>";
        $first_name = $_POST["firstname"];
        $last_name = $_POST["lastname"];
        $phone_number = $_POST["phonenumber"];
        $address = $_POST["address"];
        $license_plate = $_POST["licenseplate"];
        $insurance = $_POST["insurance"];
        $policy_number = $_POST["policynumber"];
        $email = $_POST["email"];

        mysql_query("INSERT INTO  `RateMeData`.`Accident` (
                            `FirstName` ,
                            `LastName` ,
                            `PhoneNumber` ,
                            `Address` ,
                            `LicensePlate` ,
                            `InsuranceCompany`
                            `PolicyNumber`
                            `Email`
                    )
                    VALUES (
                        NULL ,  '$first_name',  '$last_name',  '$phone_number',  '$address',  '$license_plate', '$insurance', '$policy_number', '$email'
                    );");
    }
    //     // email address contains @ and . and is valid then you may proceed
    //     if(filter_var($emailaddress, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $emailaddress)) {
    //         $emailaddress_query = "SELECT Email
    //                        FROM `Accident`
    //                        WHERE Email = '$email'";
    //         echo "<div>Email Success!</div>";
    //         $emailaddress_result = mysql_query($emailaddress_query);

    //         if (mysql_num_rows($emailaddress_result) == 0) {
    //             $uppercase = preg_match('@[A-Z]@', $password);
    //             $lowercase = preg_match('@[a-z]@', $password);
    //             $number    = preg_match('@[0-9]@', $password);
    //             echo "<div>UserName is free!</div>";
    //              if($uppercase && $lowercase && $number && strlen($password) >= 6) {
    //                 echo "<div>Passes Password!</div>";
    //                 if($password === $password_confirm) {
    //                     // A higher "cost" is more secure but consumes more processing power
    //                     $cost = 10;
    //                     echo "<div>Both Passwords are correct!</div>";
    //                     // Create a random salt
    //                     $salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');

    //                     // Prefix information about the hash so PHP knows how to verify it later.
    //                     // "$2a$" Means we're using the Blowfish algorithm. The following two digits are the cost parameter.
    //                     $salt = sprintf("$2a$%02d$", $cost) . $salt;

    //                     // Value:
    //                     // $2a$10$eImiTXuWVxfM37uY4JANjQ==

    //                     // Hash the password with the salt
    //                     $hash = crypt($password, $salt);

    //                     mysql_query("INSERT INTO  `RateMeData`.`Users` (
    //                         `UserID` ,
    //                         `FirstName` ,
    //                         `LastName` ,
    //                         `EmailAddress` ,
    //                         `Occupation` ,
    //                         `Hash`
    //                     )
    //                     VALUES (
    //                         NULL ,  '$first_name',  '$last_name',  '$emailaddress',  '$occupation',  '$hash'
    //                     );");

    //                     echo "<div>Success!</div>";
    //                     // begin_session($emailaddress, $password) {
    //                 } else {
    //                     // Display Passwords do not match
    //                 }
    //             } else {
    //                 // Password does not meet requirements (Must be at least 6 characters in length.
    //                 // Must contain uppercase and lowercase characters as well as numbers).
    //             }
    //         } else {
    //             // Display email address is already in use
    //         } 
    //     } else {
    //         // Display email address is not valid
    //     }               
    // } else {
    //     // Display all fields must be filled.
    // }

    close_sql();
    
    // Begins the session with users login info and redirects user to Home page
    function begin_session($user_name, $password) {

        # remember the login information
        $_SESSION["username"] = $user_name;
        $_SESSION["password"] = $password;

        $expire = time() + (60 * 60 * 24 * 7);
        $created = date("D y M d, g:i:s a", time());
         
        setcookie("login", $created, $expire);

        // redirect("MainPage.php", "login Successful!");
    }
?>