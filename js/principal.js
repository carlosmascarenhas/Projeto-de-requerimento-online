$(document).on('click', '.icone', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

document.querySelector(".menu-button").addEventListener("click", function(event) {
   event.preventDefault();
   event.stopPropagation();
   document.querySelector('.menu-dropdown').classList.remove('hidden');
   document.querySelector('.menu-button').classList.add('text-black');
});

document.getElementsByTagName('body')[0].addEventListener('click', function(event){
  if(!event.target.classList.contains('.menu-button')){
    document.querySelector('.menu-dropdown').classList.add('hidden');
    document.querySelector('.menu-button').classList.remove('text-black');
  }
});

function hidden_containers(){
  document.querySelectorAll('.container').forEach(function(element){
    element.classList.add('displayNone');
  });
}

document.querySelector('.icones').addEventListener('click', function(event){
  if(event.target !== event.currentTarget){
    let container_name = event.target.dataset.container;
    hidden_containers();
    document.querySelector(`.${container_name}`).classList.remove('displayNone');
  }
});
/*função que chama o modal*/
//$("#detalhe_pedido").click(function teste2(){
  
   $('.lista li').click(function(){
        var id = $(this).attr('id');
       // alert(id);
     
     document.getElementById("modal").innerHTML = Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2', '3']
}).queue([
  {
    title: 'Question 1',
    text: 'Chaining swal2 modals is easy'
  },
  'Question 2',
  'Question 3'
]).then((result) => {
  if (result.value) {
    Swal.fire({
      title: 'All done!',
      html:
        'Your answers: <pre><code>' +
          JSON.stringify(result.value) +
        '</code></pre>',
      confirmButtonText: 'Lovely!'
    })
  }
})  
});


