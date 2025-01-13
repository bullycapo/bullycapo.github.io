const videos = ['monthlybtc.mp4', 'dailybtc.mp4', 'quarterbtc.mp4', 'weeklybtc.mp4'];
let currentVideoIndex = 0;

const videoElements = [
    document.getElementById('video1'),
    document.getElementById('video2')
];

videoElements.forEach((video, index) => {
    video.src = videos[index % videos.length];
});

function playNextVideo() {
    const currentVideo = videoElements[currentVideoIndex % 2];
    const nextVideo = videoElements[(currentVideoIndex + 1) % 2];

    nextVideo.src = videos[(currentVideoIndex + 1) % videos.length];
    nextVideo.play();

    currentVideo.classList.add('hidden');
    nextVideo.classList.remove('hidden');

    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

videoElements[0].addEventListener('ended', playNextVideo);
