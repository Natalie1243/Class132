img  = "";
status_model = "";
objects ="";

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecing objects";
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 600, 450);
    if (status_model == 1) {
    textSize(20);
    text(objects[1].label, objects[1].x , objects[1].y);
    noFill();
    stroke("#FF0000")
    square(30, 55, 400);
    square(380, 55, 342);
    text(objects[0].label, objects[0].x , objects[0].y);
    }
    
}

function modelLoaded() {
    console.log("Model Loaded")
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        status_model = 1;
        objects = results;
    }
}