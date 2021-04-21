canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
 car1_height = 90;
 car2_width = 100;
 car2_height = 90;

background_image =bg1.jpg;
console.log("background_image = " + background_image);
car1_image = "c1.png";

car1_x = 10;
car1_y = 10;

car2_image = "c2.png";

car2_x = 10;
car2_y = 120;

function add(){ background_imgTag = new Image();
     background_imgTag.onload = uploadBackground; 
     background_imgTag.src = background_image; 
      car1_imgTag = new Image(); 
       car1_imgTag.onload = uploadcar1; 
        car1_imgTag.src = car1_image;
		car2_imgTag = new Image(); 
		car2_imgTag.onload = uploadcar2; 
		 car2_imgTag.src = car2_image;  
     }

function uploadBackground (){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadcar1 (){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width, car1_height);
}
function uploadcar2 (){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log("key_pressed");
    if (key_pressed == '38'){
        c1_up();
        console.log("up");
    }

     if (key_pressed == '37'){
        c1_left();
        console.log("left");
    }

     if (key_pressed == '39'){
        c1_right();
        console.log("right");
    }

     if (key_pressed == '40'){
        c1_down();
        console.log("down");
    }

	if (key_pressed == '87'){
        c2_up();
        console.log("up");
    }

     if (key_pressed == '65'){
        c2_left();
        console.log("left");
    }

     if (key_pressed == '68'){
        c2_right();
        console.log("right");
    }

     if (key_pressed == '83'){
        c2_down();
        console.log("down");
    }
}

function c1_up(){
    if (car1_y >=0){
        car1_y= car1_y-10;
        console.log("When up arrow is pressed = "+car1_x + "-"+ car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function c1_down(){
    if (car1_y <=500){
        car1_y= car1_y+10;
        console.log("When down arrow is pressed = "+car1_x + "-"+ car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function c1_left(){
    if (car1_x >=0){
        car1_x= car1_x-10;
        console.log("When left arrow is pressed = "+car1_x + "-"+ car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function c1_right(){
    if (car1_x <=700){
        car1_x= car1_x+10;
        console.log("When right arrow is pressed = "+car1_x + "-"+ car1_y);
        uploadBackground();
        uploadcar1();
    }

	function c2_up(){
		if (car2_y >=0){
			car2_y= car2_y-10;
			console.log("When up arrow is pressed = "+car2_x + "-"+ car2_y);
			uploadBackground();
			uploadcar2();
		}
	}
	function c2_down(){
		if (car2_y <=500){
			car2_y= car2_y+10;
			console.log("When down arrow is pressed = "+car2_x + "-"+ car2_y);
			uploadBackground();
			uploadcar2();
		}
	}
	function c2_left(){
		if (car2_x >=0){
			car2x= car2_x-10;
			console.log("When left arrow is pressed = "+car2_x + "-"+ car2_y);
			uploadBackground();
			uploadcar2();
		}
	}
	function c2_right(){
		if (car2_x <=700){
			car2_x= car2_x+10;
			console.log("When right arrow is pressed = "+car2_x + "-"+ car2_y);
			uploadBackground();
			uploadcar2();
		}	

		if (car1_x>700){
			console.log("Car 1 Won!");
			document.getElementById('game_status').innerhtml="Car 1 Won!";
		}
		if (car2_x>700){
			console.log("Car 2 Won!");
			document.getElementById('game_status').innerhtml="Car 2 Won!";
		}

