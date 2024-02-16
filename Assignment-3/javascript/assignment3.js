var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_one, player_two, player_three;

function onYouTubeIframeAPIReady() {
    player_one = new YT.Player('player_one', {
        height: '360',
        width: '640',
        videoId: 'WywSo-k5YIs',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
    });

    player_two = new YT.Player('player_two', {
        height: '360',
        width: '640',
        videoId: 'z0AiuXah9WY',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
    });

    player_three = new YT.Player('player_three', {
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

function playVideo(player) {
    player.playVideo();
}

function pauseVideo(player) {
    player.pauseVideo();
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateVideoPlayerStatus(player) {
    if (isElementInViewport(player.getIframe())) {
        playVideo(player);
    }
    else {
        pauseVideo(player);
    }
}

window.addEventListener('scroll', function () {
    updateVideoPlayerStatus(player_one);
    updateVideoPlayerStatus(player_two);
    updateVideoPlayerStatus(player_three);
});