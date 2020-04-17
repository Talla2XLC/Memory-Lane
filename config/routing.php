<?php

return $rout =  [
    '/' => 'Home@index',
    '/db/getUsers/all' => 'Users@all',
    '/db/setUsers' => 'Users@setUser',
    '/db/getUsers/item' => 'Users@getItem',
    '/mail/sendmail' => 'SendMail@goToMail'
];