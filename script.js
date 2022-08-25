/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



var j = 0;

var imgs=new Array('img/Крест.png','img/Burger.png'); //         Добавте свои картинки через запятую
function imgsrc(){

var image=document.getElementById("image");
if(j % 2 == 0){
image.src=imgs[0];
}
if (j % 2 == 1){
  image.src=imgs[1];
}

j++;
}
