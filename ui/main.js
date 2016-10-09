console.log('Loaded!');
var element = document.getElementById('main-txt');
element.innerHTML='Hi! I am Harshit and this is my  webapp';
var img= document.getElementById('madi');
maginLeft=0;
function moveRight(){
    marginLeft= marginLeft +1;
    img.syle.marginLeft= marginLeft+'px';
}
img.onclick = function(){
   var interval = setInterval(moveRight,50);
   img.style.marginLeft='100px'; 
   
};