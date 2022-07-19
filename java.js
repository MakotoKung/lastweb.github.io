var open = document.getElementById('open');
var start = document.getElementById('start');
var test = document.getElementById('1');
var test2 = document.getElementById('2');
var test3 = document.getElementById('3');
var test4 = document.getElementById('4');
var button = document.getElementById('button');
var wrapper = document.getElementById('zoomin');
var bt1 = document.getElementById('b1');
var bt2 = document.getElementById('b2');
var bt3 = document.getElementById('b3');
var hiden = document.getElementById('hidden')
var loading = document.getElementById('loading');
var header = document.querySelector('.header1');
var scroll = 500; 
var scroll2 = 520;
var fadein = document.getElementById('fade');
var op0 = document.getElementById('op0');
var left = document.getElementById('left');
var up = document.getElementById('up');
var right = document.getElementById('right');
var tri = document.getElementById('tri');




window.onload = function(){
   setTimeout(function(){
      open.classList.add('intro');
   },2000);
   setTimeout(function remove(){
      open.remove();
   },4000);
   setTimeout(function(){
      loading.classList.add('intro'); 
   },2500);
   setTimeout(function(){
      hiden.classList.add('background');
      hiden.classList.remove('hiden');
   },4500);
   setTimeout(function(){
    start.classList.add('start');
   },4000);
   setTimeout(function(){
      tri.classList.add('fade_in')
   },5000);
   setTimeout(function(){
    start.classList.remove('op0');
   },4000);
   setTimeout(function(){
    test2.classList.add('start');
   },5000);
   setTimeout(function(){
      op0.classList.remove('op0')
     },4000);
   setTimeout(function(){
    test3.classList.add('start');
   },4000); setTimeout(function(){
    test4.classList.add('start');
   },4000);
   setTimeout(function(){
      button.classList.add('bt-zoom')
   },4000);
  setTimeout(function(){
      wrapper.classList.add('bt-zoom')
  },4000);
  setTimeout(function(){
      bt1.classList.add('bt-zoom1')
  },2000);
  setTimeout(function(){
      bt2.classList.add('bt-zoom2')
  },2000);
  setTimeout(function(){
      bt3.classList.add('bt-zoom3')
  },2000); 
  setTimeout(function(){
   left.classList.add('button-left')
  },2000); 
   setTimeout(function(){
   up.classList.add('button-up')
  },2000); 
  setTimeout(function(){
   right.classList.add('button-right')
  },2000);
  setTimeout(function(){
   tri.classList.add('fade_in')
  },5000);
  
};

window.addEventListener('scroll', scrolldown);


function scrolldown (){
   if (window.scrollY > scroll){
      header.classList.add('headertrue');
     
   }
   else{
      header.classList.remove('headertrue');
      
   }
   if (window.scrollY > scroll2) {
      fadein.classList.add('fade-in');
   } else {
      fadein.classList.remove('fade-in');
   }
  
}





