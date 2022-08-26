import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {

localStorage.setItem("videoplayer-current-time", seconds);
        console.log(seconds);
}

function videoPlayBySavedTime() {
    const videoSavedTime = localStorage.getItem("videoplayer-current-time")

    if (videoSavedTime) {
        player.setCurrentTime(videoSavedTime);
        console.log(`The video plays from: ${videoSavedTime} second`)
    }
}
    
videoPlayBySavedTime();