<?php
function getDir()
{
    return isset($_GET['dir']) ? $_GET['dir'] : '';
}

function getPage()
{
    return isset($_GET['page']) ? $_GET['page'] : '';
}

function getLessonNumber()
{
    return isset($_GET['dir']) && isset($_GET['page']) && $_GET['dir'] == 'Lessons' && !empty($_GET['page']) ? $_GET['page'] : '';
}

function lessonHeader($text)
{
    $lesson = getLessonNumber();
    return '<h1>Lesson ' . $lesson . ' - ' . $text . '</h1>';
}

function lessonNavigation()
{
    $lesson = getLessonNumber();

    if ($lesson <= 0) return;

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

function jap($text, $meaning = '', $isParticle = false)
{
    return '<jap' . ($isParticle ? ' particle' : '') . '>' . $text . ($meaning ? '<meaning>' . $meaning . '</meaning>' : '') . '</jap>';
}

function roma($text, $meaning = '')
{
    return '<roma>' . $text . ($meaning ? '<meaning>' . $meaning . '</meaning>' : '') . '</roma>';
}