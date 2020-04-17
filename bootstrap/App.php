<?php

namespace Bootstrap;

use Core\Router;

class App 
{
    public function run()
    {
        $route = new Router();
        $route->redirection();
    }
}