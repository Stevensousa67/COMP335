// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'dWjYph2Hrk8',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
    });
}

function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

// these functions handle checking if the element is visible in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateVideoPlayerStatus() {
    var video_player = document.getElementById('player');

    // element visible in the viewport
    if (isElementInViewport(video_player)) {
        playVideo();
        console.log('Video player visible.');
    }
    // element not visible in the viewport
    else {
        pauseVideo();
        console.log('Video player NOT visible.');
    }
}

window.addEventListener('scroll', updateVideoPlayerStatus)