$(document).on('click', 'a ', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

var menuButton = document.querySelector(".menu-button");

 menuButton.addEventListener("click", function(event) {
   event.preventDefault();
   document.querySelector('.menu-dropdown').classList.toggle('hidden');
   document.querySelector('.menu-button').classList.toggle('text-black');
});




