<?php

namespace Core;


class Router
{
    /**
     * Подключает файл с раутингом,
     *  где описывается по какой URL будет подключатся класс
     */
    private function readRout()
    {
        $rout = require_once 'config/routing.php';
        $routes = $this->parserRout($rout);
        return $routes;     
    }

    /**
     * Получает URL запрос и сравнивает от ожидаемого,
     * если сушествует тако вид запроса подключает класс и экшан
     */
    public function redirection()
    {
        $urlRequest = $_SERVER['REQUEST_URI'];
        $urlTemplate = $this->readRout();
        if( isset($urlTemplate[$urlRequest]) ){
            $class = $urlTemplate[$urlRequest]['class'];
            if(class_exists('App\\'.$class)){
                $action = $urlTemplate[$urlRequest]['action'];
                $nameSpace = 'App\\'.$class;
                $object = new $nameSpace();
                call_user_func_array(array($object,$action),array());
            }
        }
    }

    /**
     * Парсит роуты и возврошает массив классов и экшонов,
     * где ключь это url
     * @rout массив правил для подключение класса и экшона
     */
    private function parserRout($rout):array
    {
        foreach ($rout as $key=>$item){
            //$class_action[] = $this->parseClassAction($item);
            $urls[$key] = $this->parseClassAction($item);
        }
        
        return $urls;
    }

    /**
     * Парсит значение которая состоит из класса и экшано и разделяет их 
     * сохраняя в массив
     */
    private function parseClassAction($item):array
    {
        $result = explode('@',$item);
        $array['class'] = $result[0];
        $array['action'] = $result[1];
        return $array;
    }
}