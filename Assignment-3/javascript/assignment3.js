/*
Authors: Steven Sousa & James Evans
*/

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_one, player_two, player_three;
var userClickedPlay_one = false; // Variable to track if user clicked play for player_one
var userClickedPlay_two = false; // Variable to track if user clicked play for player_two
var userClickedPlay_three = false; // Variable to track if user clicked play for player_three

function onYouTubeIframeAPIReady() {
    player_one = new YT.Player('player_one', {
        videoId: 'WywSo-k5YIs',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
        events: {
            'onStateChange': function (event) {
                onPlayerStateChange(event, 'one');
            }
        }
    });

    player_two = new YT.Player('player_two', {
        videoId: 'z0AiuXah9WY',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
        events: {
            'onStateChange': function (event) {
                onPlayerStateChange(event, 'two');
            }
        }
    });

    player_three = new YT.Player('player_three', {
        videoId: 'dWjYph2Hrk8',
        playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'mute': 1
        },
        events: {
            'onStateChange': function (event) {
                onPlayerStateChange(event, 'three');
            }
        }
    });
}

function onPlayerStateChange(event, playerNumber) {
    if (event.data == YT.PlayerState.PLAYING) {
        if (playerNumber === 'one') {
            userClickedPlay_one = true;
        } else if (playerNumber === 'two') {
            userClickedPlay_two = true;
        } else if (playerNumber === 'three') {
            userClickedPlay_three = true;
        }
    }
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

function updateVideoPlayerStatus(player, userClickedPlay) {
    if (isElementInViewport(player.getIframe()) && userClickedPlay) {
        playVideo(player);
    }
    else {
        pauseVideo(player);
    }
}

window.addEventListener('scroll', function () {
    updateVideoPlayerStatus(player_one, userClickedPlay_one);
    updateVideoPlayerStatus(player_two, userClickedPlay_two);
    updateVideoPlayerStatus(player_three, userClickedPlay_three);
});
