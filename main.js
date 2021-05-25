function setup(){
    canvas = createCanvas(640, 420);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    circle("red.jpg", 100, 100);
    circle("red.jpg", 100, 200);
    image(video, 300, 300, 0, 0);
    circle("red.jpg", 200, 200);
    circle("red.jpg", 200, 100);
}