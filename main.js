var canvas = new fabric.Canvas('myCanvas');

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;

block_width = 5;
block_height = 5;

var hole_obj = "";
var block_obj = "";

function new_image(){
    fabric.Image.fromURL("ball.png", function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(80);
        block_obj.scaleToHeight(80);
        block_obj.set({
            top: ball_y,
            left: ball_x
        });

        canvas.add(block_obj);
    });
}

function load_img(){
    fabric.Image.fromURL("golf-h.png", function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(80);
        hole_obj.scaleToHeight(80);
        hole_obj.set({
            top:hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });
    new_image()
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(block_obj);
		document.getElementById("hd3").innerHTML="You have hit the Goal!";
		document.getElementById("myCanvas").style.borderColor="purple";
	}
    else{
        if(keyPressed == '38'){
            Up();
            console.log("Up");
        }
        if(keyPressed == '39'){
            Right();
            console.log("Right");
        }
        if(keyPressed == '40'){
            Down();
            console.log("Down");
        }
        if(keyPressed == '37'){
            Left();
            console.log("Left");
        }
    }
}
function Up(){
    if(ball_y>=0){
        ball_y = ball_y - block_height;
        console.log("Ball Y is "+ball_y+" and Ball X is "+ball_x);
        canvas.remove(block_obj);
        new_image();
    }
}
function Down(){
    if(ball_y<=600){
        ball_y = ball_y + block_height;
        console.log("Ball Y is "+ball_y+" and Ball X is "+ball_x);
        canvas.remove(block_obj);
        new_image();
    }
}
function Right(){
    if(ball_x<=1000){
        ball_x = ball_x + block_width;
        console.log("Ball Y is "+ball_y+" and Ball X is "+ball_x);
        canvas.remove(block_obj);
        new_image();
    }
}
function Left(){
    if(ball_x>=0){
        ball_x = ball_x - block_width;
        console.log("Ball Y is "+ball_y+" and Ball X is "+ball_x);
        canvas.remove(block_obj);
        new_image();
    }
}