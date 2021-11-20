import Player from '@vimeo/player';
import throttle from "lodash.throttle";

//var throttle = require(' lodash.throttle ')

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(data => localStorage.setItem(STORAGE_KEY, data.seconds), 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
