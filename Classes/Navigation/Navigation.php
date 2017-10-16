<?php
/**
 * Created by PhpStorm.
 * User: Valentin
 * Date: 16.10.2017
 * Time: 10:59
 */

class Navigation
{
    private $menus;

    public function __construct()
    {
        $this->menus = [];
    }

    public function addMenu(Menu $menu)
    {
        $this->menus[] = $menu;
    }

    public function render()
    {
        echo '<ul>';
        foreach ($this->menus as $menu) {
            if ($menu->hasItems()) {
                echo '<li class="dropdown"><a href="' . $menu->getUrl() . '">' . $menu->getName() . '</a><ul>';
                foreach ($menu->getItems() as $item) {
                    echo '<a href="' . $item->getUrl() . '">' . $item->getName() . '</a>';
                }
                echo '</ul></li>';

            } else {
                echo '<li><a href="' . $menu->getUrl() . '">' . $menu->getName() . '</a></li>';
            }
        }

        echo '</ul>';
    }
}