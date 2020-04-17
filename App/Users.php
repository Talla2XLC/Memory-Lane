<?php

namespace App;

use App\Interfaces\iUsers;
use Core\Model;
use Core\Application;
use Core\Mailer;

class Users extends Application implements iUsers
{
    public function all()
    {
        //$model = new Model();
        $mailer = new Mailer();
        

        
        //echo 'Сласс Users, метод all';
    }

    public function setUser()
    {
        $mailer =  
    }

    public function authUser()
    {
        
        
        if(isset($_POST['name'])){
            $name = $_POST['name'];
                        
        }
        if(isset($_POST['email'])){
            $email = $_POST['email'];
        }

    }
}
