function refreshPage(){
    window.location.reload();
} 


function togglePlay() {
  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}


function togglePlay2() {
  var myAudio = document.getElementById("audio2");
  return audio2.paused ? audio2.play() : audio2.pause();
}