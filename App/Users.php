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
        
    }

    public function setUser()
    {
          
    }

    public function authUser()
    {
        
        
        if(isset($_POST['name'])){
            $name = $_POST['name'];
                        
        }
        if(isset($_POST['email'])){
            $email = $_POST['email'];
        }
        if (isset($name) && isset($email)){
            //тут сохроняем в DB
        }
    }
}
