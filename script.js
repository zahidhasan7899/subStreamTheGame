document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video");
    var videoSrc = "https://apollo.production-public.tubi.io/live/ac-bein.m3u8?ap.debug=0&ap.pt=0&ap.sid=4cf37a97-5901-401a-9dc8-df57f910cef7";

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
