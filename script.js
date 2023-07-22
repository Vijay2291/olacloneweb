document.getElementById("bar").addEventListener("click",nav);
function nav()
{
document.getElementById("side-bar").style.height="700px";
document.getElementById("side-bar").style.width="25%";
document.getElementById("side-bar").style.position="absolute";
document.getElementById("side-bar").style.top="-20px";
document.getElementById("side-bar").style.right="0px";
document.getElementById("side-bar").style.background="white";
document.getElementById("clear").style.visibility="visible";
document.getElementById("bar-opt").style.visibility="visible";
}
document.getElementById("clear").addEventListener("click",close);
function close()
{
document.getElementById("side-bar").style.height="0px";
document.getElementById("side-bar").style.width="0px";
this.style.visibility="hidden";
document.getElementById("bar-opt").style.visibility="hidden";
}
document.getElementById("like2").addEventListener("click",like);
function like(){
document.getElementById("next").style.visibility="hidden";
document.getElementById("rent").style.visibility="visible";
document.getElementById("out").style.visibility="hidden";
document.getElementById("dest").style.visibility="hidden";
document.getElementById("pack").style.visibility="visible";
document.getElementById("clock").style.visibility="visible";
}
document.getElementById("like3").addEventListener("click",lika);
function lika(){
document.getElementById("rent").style.visibility="hidden";
document.getElementById("out").style.visibility="visible";
document.getElementById("next").style.visibility="hidden";
document.getElementById("dest").style.visibility="visible";
document.getElementById("pack").style.visibility="hidden";
document.getElementById("clock").style.visibility="hidden";
}
document.getElementById("like1").addEventListener("click",likw);
function likw(){
document.getElementById("next").style.visibility="visible";
document.getElementById("rent").style.visibility="hidden";
document.getElementById("out").style.visibility="hidden";
document.getElementById("dest").style.visibility="visible";
document.getElementById("pack").style.visibility="hidden";
document.getElementById("clock").style.visibility="hidden";
}
document.getElementById("back-img").onmouseover=function (){hov()};
document.getElementById("back-img").onmouseout=function (){out()};
function hov()
{
document.getElementById("ba-img-b").style.color="#03792e";
}
function out()
{
document.getElementById("ba-img-b").style.color="black";
}
document.getElementById("back-img1").onmouseover=function (){hov1()};
document.getElementById("back-img1").onmouseout=function (){out1()};
function hov1()
{
document.getElementById("ba-img1-b").style.color="#03792e";
}
function out1()
{
document.getElementById("ba-img1-b").style.color="black";
}
document.getElementById("back-img2").onmouseover=function (){hov2()};
document.getElementById("back-img2").onmouseout=function (){out2()};
function hov2()
{
document.getElementById("ba-img2-b").style.color="#03792e";
}
function out2()
{
document.getElementById("ba-img2-b").style.color="black";
}























