var bgimg,tom ,tomI,jerry,jerryI,tomA,jerryA,tomI2,jerryI2;
function preload() {
    tomI2=loadAnimation("images/cat4.png");
    jerryI2=loadAnimation("images/mouse4.png")
    tomA=loadAnimation("images/cat2.png","images/cat3.png");
    jerryA=loadAnimation("images/mouse2.png","images/mouse3.png");

bgimg=loadImage("images/garden.png");
tomI=loadImage("images/cat1.png");
jerryI=loadImage("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600,20,20);
    tom.addImage(tomI);
    jerry = createSprite(200,600);
    jerry.addImage(jerryI);
jerry.scale= 0.25;
tom.scale= 0.25;


    //create tom and jerry sprites here

}

function draw() {

    background(bgimg);
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.addAnimation("stop",tomI2);
    tom.changeAnimation("stop");
    jerry.addAnimation("scared",jerryI2);
    jerry.changeAnimation("scared");
tom.velocityX=0;
}
    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("run",tomA);
tom.changeAnimation("run");
jerry.addAnimation("teasing",jerryA);
jerry.changeAnimation("teasing");
}
  //For moving and changing animation write code here


}
