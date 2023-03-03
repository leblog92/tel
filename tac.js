var JWDraging;
var pic=["'https://leblog92.github.io/tel/estro.png'","'https://leblog92.github.io/tel/macr.png'","'https://leblog92.github.io/tel/duss.png'","'https://leblog92.github.io/tel/born.png'","'https://leblog92.github.io/tel/cio.png'"],"'https://leblog92.github.io/tel/mor.png'";
function init() { JWMoustache = document.createElement("div");
JWMoustache.style.position = "fixed";
JWMoustache.style.zIndex = 1000;
document.getElementsByTagName("body")[0].appendChild(JWMoustache);
JWMoustache.style.top=0+"px";
JWMoustache.style.left=0+"px";
JWMoustache.onmousedown=JWStartDrag;
window.onmouseup=JWEndDrag;
JWMoustache.innerHTML="<img src="+pic[Math.floor(Math.random()*pic.length)]+"/></div>";}
function JWStartDrag(JWE) { JWDraging = JWE.currentTarget;
JWDoDrag(JWE);
window.onmousemove = JWDoDrag;
JWE.preventDefault();}
function JWEndDrag(JWE){window.onmousemove = null;}
function JWDoDrag(JWE){JWDraging.style.top = (JWE.clientY-186)+"px";
JWDraging.style.left = (JWE.clientX-84)+"px";
JWE.preventDefault();}
init();