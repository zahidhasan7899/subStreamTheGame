document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("live-stream");
    var streamUrl = "https://dai.google.com/ssai/event/8cov9tHQRj26xm-Qz6uWzQ/master.m3u8";

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType("application/x-mpegURL")) {
        video.src = streamUrl;
        video.play();
    }
});
