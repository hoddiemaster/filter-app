noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/W1Q6h6hh/download.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.position(250,2(50);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);    
}

function draw() {
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,80,35);

}

function filter() {
    

}
function modelLoaded(){
    console.log("model Loaded");
}
function gotPoses(results){
    if ( results >0){
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
    }
}