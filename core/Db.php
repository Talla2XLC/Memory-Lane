<?php

namespace Core;

class Db 
{
    use TSingletone;

    protected function __construct()
    {
        $config = new Configuration('conect_db');
        //Application::dump($config);
        //return;
        class_alias('\RedBeanPHP\R', '\R');

        \R::setup(
            "pgsql:host={$config->config['host']};dbname={$config->config['db_name']}",
            "{$config->config['user_db']}",
            "{$config->config['pass_db']}"
        );
    }
}