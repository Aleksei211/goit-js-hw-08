import Player from '@vimeo/player';
import throttle from "lodash.throttle";

//var throttle = require(' lodash.throttle ')

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Фиксирует время с интервалом ~ 1000ms
player.on('timeupdate', throttle(data => localStorage.setItem(STORAGE_KEY, data.seconds), 1000));
// Задает плееру сохраненное время
player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
