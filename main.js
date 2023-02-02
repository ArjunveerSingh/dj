function preload(){
    music1= loadSound("JMDL.mp3");
    music2= loadSound("BZ.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,500);
}
