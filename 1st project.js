let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

  menu.onclick = ()=>{
    menu.classList.toggle("fa-close");
    navbar.classList.toggle("active");
  }

 document.querySelector('#search-bar').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 } 
 document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 }

 document.querySelector('#shopping-btn').onclick = () =>{
    document.querySelector('#shopping-carts').classList.toggle('active');
 }