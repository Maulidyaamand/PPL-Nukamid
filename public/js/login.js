var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var img = document.querySelector('.eye');
var a;
pwShowHide = document.querySelectorAll('.eye'),
links = document.querySelectorAll();



function pass(){
    if(a==1){
      document.getElementById('Password').type='text';
      document.getElementsByClassName('eye').src='hidden.png'
      a=0;
    }else{
      document.getElementById('Password').type='password';
      document.getElementsByClassName('eye').src='eye.png'
      a=1;
    }

    
    if (img.src.endsWith('/img/eye.png')) {
        img.src = "/img/hidden.png";
      } else {
        img.src = "/img/eye.png";
      }
}