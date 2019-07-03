$(document).on('click', '.icone', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

document.querySelector(".menu-button").addEventListener("click", function(event) {
   event.preventDefault();
   document.querySelector('.menu-dropdown').classList.remove('hidden');
   document.querySelector('.menu-button').classList.add('text-black');
});

document.getElementsByTagName('body')[0].addEventListener('click', function(event){
  console.log(event.target.classList)
  if(!event.target.classList.contains('.menu-button')){
    document.querySelector('.menu-dropdown').classList.add('hidden');
    document.querySelector('.menu-button').classList.remove('text-black');
  }
});





