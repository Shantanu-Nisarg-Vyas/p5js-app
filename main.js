function setup() {
    canvas = createCanvas(740, 580);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill(255, 0, 0);
    rect(0, 0, 740, 580);
    image(video, 50, 50, 640, 480);
}

function take_snapshot() {
    save("Image.png");
}