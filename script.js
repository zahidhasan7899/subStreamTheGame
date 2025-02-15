document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video");
    var videoSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });

        // Log errors for debugging
        hls.on(Hls.Events.ERROR, function (event, data) {
            console.error("HLS.js Error:", data);
        });

    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", function () {
            video.play();
        });
    }
});
