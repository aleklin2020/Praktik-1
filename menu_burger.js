
let navbar = document.querySelector(".container")
let ham = document.querySelector(".menu_burger")
let name = document.querySelector(".logo_header")
let tel = document.querySelector(".calcel")
let tadsa = document.querySelector(".fitnes_name")
let test = document.querySelector(".form_click")
let form_ac = document.querySelector(".form_action")


 function burgerMenu(icon) {
    icon.classList.toggle("change");
    
  ham.classList.toggle("showClose")
  ham.classList.toggle("possition")
  navbar.classList.toggle("scroll_menu_2")
  name.classList.toggle("scroll_3")
  tel.classList.toggle("scroll_2")
  test.style.display = "block"
  
  tadsa.style.display = "block" 
  

  }

 /*let submit = document.querySelector(".submit_form") 

  	test.onclick = function () {
  		form_ac.style.display = "flex"
  		ham.classList.toggle("possition")
  		ham.classList.toggle("showClose")
  		


  	}

  submit.onclick = function () {
  	form_ac.style.display = "none"

  }
  */









