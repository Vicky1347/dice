var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
var player1="dice"+n+".png";
document.querySelector(".img1").setAttribute("src",player1);

var m=Math.random()*6;

m=Math.floor(m)+1;
var player2="dice"+m+".png";
document.querySelector(".img2").setAttribute("src",player2);
var ply1=prompt("enter Player1 Nmae");
var ply2=prompt("enter Player2 Nmae");

if(n>m)
{

    document.querySelector("h1").innerHTML= ply1+" wins the match";
}
if(m>n)
{
    document.querySelector("h1").innerHTML=ply2 +" wins the match";
}
else if(m==n)
{

    document.querySelector("h1").innerHTML="tie";
}
