var courtImg
function preload(){
    courtImg = loadImage("images/football_field.jpeg");
}

function setup(){
    createCanvas(1000,1000);

    formObj = new Form();
}

function draw(){
    background("black");

    formObj.display();
}