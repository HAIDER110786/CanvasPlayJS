let pressed = false;
let X;
let Y;
let lineWidth = 20;
let hue = 0;
let direction = true;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

document.addEventListener('mousedown',(e)=>{
    pressed=true;
    X = e.clientX;
    Y = e.clientY;
});
document.addEventListener('mouseup',()=>pressed=false);
document.addEventListener('mouseout',()=>pressed=false);

document.addEventListener('mousemove',(e)=>{
    if(pressed)draw(e);
})

function draw(e){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.moveTo(X,Y);
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.closePath();

    X = e.clientX;
    Y = e.clientY;

    hue++;

    if(hue >= 360){
        hue = 0;
    }

    if(direction){
        lineWidth++;
    }else{
        lineWidth--;
    }

    if(lineWidth>=80 || lineWidth<=20){
        direction=!direction;
    }
}
