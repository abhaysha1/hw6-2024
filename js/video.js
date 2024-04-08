var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
	video = document.querySelector("#player1");
	console.log(video);
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime+10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("video mute");
	if (video.muted == true) {
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Style to Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Style to Original");
});

