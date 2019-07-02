$(document).on('click', 'a ', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

var menuButton = document.querySelector(".menu-button");

 menuButton.addEventListener("click", function(event) {
   event.preventDefault();
   var parent = document.querySelector(".menu");
   if (parent.classList.contains("open")) {
     parent.classList.remove("open");
   } else {
     parent.classList.add("open");
   }
});