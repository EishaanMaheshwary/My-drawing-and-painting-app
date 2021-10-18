canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_positionX;
var last_positionY;
var last_position_touch_X;
var last_position_touch_Y;
color = "blue";
line_width = 1;
mouseEvent = "empty";
canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
     color = document.getElementById("color").value;
     line_width = document.getElementById("lineWidth").value;
     mouseEvent = "mousedown";
     console.log(color,line_width);
 }
 canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
     current_positionX = e.clientX - canvas.offsetLeft;
     current_positionY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
         console.log("Last position of X and Y = ")
         console.log("x = "+last_positionX+"y = "+last_positionY);
         ctx.moveTo(last_positionX,last_positionY);
         console.log("Current position of X and Y = ")
         console.log("x = "+current_positionX+"y = "+current_positionY);
         ctx.lineTo(current_positionX,current_positionY);
         ctx.stroke();
    }
   last_positionX = current_positionX;
   last_positionY = current_positionY;
 }
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent = "mouseleave";
 }
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent = "mouseup"
 }
function AreaClear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
width_of_the_screen = screen.width;
height_of_the_screen = screen.height;
new_width = width_of_the_screen - 70;
new_height = height_of_the_screen - 300;
if (width_of_the_screen < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}   
canvas.addEventListener("touchstart",my_touchStart);
 function my_touchStart(e){
     console.log("touchstart");
     last_position_touch_X = e.touches[0].clientX - canvas.offsetLeft;
     last_position_touch_Y = e.touches[0].clientY - canvas.offsetTop;  
 }
 canvas.addEventListener("touchmove",my_touchMove);
 function my_touchMove(e){
     console.log("touchmove");
     current_position_touch_X = e.touches[0].clientX - canvas.offsetLeft;
     current_position_touch_Y = e.touches[0].clientY - canvas.offsetTop;
     ctx.beginPath();
     color = document.getElementById("color").value;
     line_width = document.getElementById("lineWidth").value;
     ctx.strokeStyle = color;
     ctx.lineWidth = line_width;
     console.log ("Last position of x and y = ");
     console.log("X =",last_position_touch_X," Y =",last_position_touch_Y);
     ctx.moveTo(last_position_touch_X,last_position_touch_Y);
     console.log ("Current position of x and y = ");
     console.log("X =",current_position_touch_X," Y =",current_position_touch_Y);
     ctx.lineTo(current_position_touch_X,current_position_touch_Y);
     ctx.stroke();
     last_position_touch_X = current_position_touch_X; 
     last_position_touch_Y = current_position_touch_Y;
 }
