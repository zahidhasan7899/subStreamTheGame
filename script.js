document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video");
    var videoSrc = "https://dffgtrda.vffddd.online:8181/bein1/tracks-v1a1/mono.ts.m3u8";

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", function () {
            video.play();
        });
    }
});