var vid = document.querySelector("#myVideo");
vid.hidden=true;
function playVid() { 
    vid.hidden=false;
    vid.play();
    
  } 
var a = document.querySelector(".down_content");
a.addEventListener('click', () => {
    vid.hidden=true;
})
 

