<?php

namespace Core;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mailer extends Application
{
    

    public $mail;

    public function getMailConfig()
    {


        $this->mail = new PHPMailer(true);
        try {
            //$arr = $this->config;
            //self::dump(self::$config);
            //Server settings
            $arr =  $this->config;
            //self::dump($arr);
            $this->mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
            $this->mail->isSMTP();  // Send using SMTP
            $this->mail->Host       = $this->config['Host']; // Set the SMTP server to send through
            $this->mail->SMTPAuth   = $this->config['SMTPAuth']; // Enable SMTP authentication
            $this->mail->Username   = $this->config['Username']; // SMTP username
            $this->mail->Password   = $this->config['Password']; // SMTP password
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $this->mail->Port       = $this->config['Port']; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            $this->mail->setLanguage('ru');
            $this->mail->CharSet = 'utf-8';
        } catch (Exception $e) {
            self::dump(array('error' => 'Произошла ошибка ' . $e));
        }
    }
}
