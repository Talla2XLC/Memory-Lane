<?php

namespace Core;


class Model
{
    
    public $pdo;

    public function __construct() {
        $this->pdo = Db::instance();
    }
}
