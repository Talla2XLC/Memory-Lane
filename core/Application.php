<?php
namespace Core;

class Application 
{
    public $config;

    public function __construct()
    {
        $class =  get_class($this);

        if($class == 'Core\Mailer'){
            $configObj = new Configuration('mail','glob');
            $this->config = $configObj->conf;         
        }
        
                
    }
    public static function dump($atr)
    {
        echo '<style>'."\n";
        self::getCss();
        echo '</style>'."\n";
        echo '<div class="app_dump"><pre>';
        print_r($atr);
        echo '</pre></div>';
    }

    private static function getCss()
    {
        require_once 'public/app_style.php';
    }
}