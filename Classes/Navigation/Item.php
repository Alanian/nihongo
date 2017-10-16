<?php
/**
 * Created by PhpStorm.
 * User: Valentin
 * Date: 16.10.2017
 * Time: 10:58
 */

class Item
{
    private $name;
    private $url;

    public function __construct($name, $url)
    {
        $this->name = $name;
        $this->url = $url;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getUrl()
    {
        return $this->url;
    }
}