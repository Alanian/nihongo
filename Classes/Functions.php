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
        return isset($_GET['page']) ? strtolower($_GET['page']) : '';
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

    public function lessonNavigation()
    {
        $lesson = $this->getLessonNumber();

        switch ($lesson) {
            case '1':
                $prev = 'Hitotsu';
                $next = $lesson + 1;
                break;
            case '20':
                $prev = $lesson - 1;
                $next = 'Futatsu';
                break;
            case '21':
                $prev = 'Futatsu';
                $next = $lesson + 1;
                break;
            case '40':
                $prev = $lesson - 1;
                $next = 'Mittsu';
                break;
            default:
                $prev = $lesson - 1;
                $next = $lesson + 1;
        }

        $html = '<div class="button-group">';
        $html .= '<a class="button prev" href="/Lessons/' . $prev . '">' . (is_int($prev) ? 'Previous' : $prev) . '</a>';
        $html .= '<a class="button next" href="/Lessons/' . $next . '">' . (is_int($next) ? 'Next' : $next) . '</a>';
        $html .= '</div>';

        return $html;
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