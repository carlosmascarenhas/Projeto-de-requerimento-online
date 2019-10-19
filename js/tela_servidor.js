$(document).on('click', '.icone', function () {
  $(this).addClass('active').siblings().removeClass('active')
})

document.querySelector(".menu-button").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector('.menu-dropdown').classList.remove('hidden');
  document.querySelector('.menu-button').classList.add('text-black');
});

document.getElementsByTagName('body')[0].addEventListener('click', function (event) {
  if (!event.target.classList.contains('.menu-button')) {
    document.querySelector('.menu-dropdown').classList.add('hidden');
    document.querySelector('.menu-button').classList.remove('text-black');
  }
});

function hidden_containers() {
  document.querySelectorAll('.container').forEach(function (element) {
    element.classList.add('displayNone');
  });
}

document.querySelector('.icones').addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    let container_name = event.target.dataset.container;
    hidden_containers();
    document.querySelector(`.${container_name}`).classList.remove('displayNone');
  }
});
if(screen.width < 1024){ 
  $(document).ready(function() {
    $('.menu-mobile').slideAndSwipe();
  });
}
