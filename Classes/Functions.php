<?php
/**
 * Created by PhpStorm.
 * User: Valentin
 * Date: 26.09.2017
 * Time: 13:52
 */

class Functions
{

    public function getDir()
    {
        return isset($_GET['dir']) ? $_GET['dir'] : '';
    }

    public function getPage()
    {
        return isset($_GET['page']) ? $_GET['page'] : '';
    }

    public function getLessonNumber()
    {
        return isset($_GET['dir']) && isset($_GET['page']) && $_GET['dir'] == 'Lessons' && !empty($_GET['page']) ? $_GET['page'] : '';
    }

    public function lessonHeader($text)
    {
        $lesson = $this->getLessonNumber();
        return '<h1>Lesson ' . $lesson . ' - ' . $text . '</h1>';
    }

    public function jap($text, $meaning = '', $isParticle = false)
    {
        return '<jap' . ($isParticle ? ' particle' : '') . '>' . $text . ($meaning ? '<meaning>' . $meaning . '</meaning>' : '') . '</jap>';
    }

    public function roma($text, $meaning = '')
    {
        return '<roma>' . $text . ($meaning ? '<meaning>' . $meaning . '</meaning>' : '') . '</roma>';
    }
}