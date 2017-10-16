<?php
/**
 * Created by PhpStorm.
 * User: Valentin
 * Date: 16.10.2017
 * Time: 10:57
 */

class Menu
{
    private $name;
    private $url;
    private $items;

    public function __construct($name, $url)
    {
        $this->name = $name;
        $this->url = $url;
        $this->items = [];
    }

    public function hasItems()
    {
        return !empty($this->items);
    }

    public function addItem(Item $item)
    {
        $this->items[] = $item;
    }

    public function getItems()
    {
        return $this->items;
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