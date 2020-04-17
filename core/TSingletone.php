<?php
namespace Core;


trait TSingletone
{
    protected static $instance;

    /**
     * Вызывает закрытый класс, которая не вызывается из вне
     */
    public static function instance(){
        if(self::$instance === null){
            self::$instance = new self();
        }
        return self::$instance;
    }
}