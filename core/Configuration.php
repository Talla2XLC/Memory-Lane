<?php

namespace Core;

class Configuration 
{
    /**
     * Хранит конфигурацию
     */
    public $conf;
    
    public function __construct($conf,$type = null)
    {
       $configs = require_once 'config/config.php';

       if($type === null) {
           $type = $configs['type'];
           $this->conf = $configs[$type][$conf];
        }
       else {
        //Application::dump($configs[$type][$conf]);
           $this->conf = $configs[$type][$conf];
       }
       
    }
}