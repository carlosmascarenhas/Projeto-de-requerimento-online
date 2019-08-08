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
  inputPlaceholder: 'Escolha a opção',
  confirmButtonText: 'Próximo',
  cancelButtonText: 'Cancelar',
  confirmButtonColor:'#159952',
  showCancelButton: true,
  cancelButtonColor:'#37393B',
}).queue([
  {
    title: 'Informe seu turno',
    input: 'select',
    inputOptions: {
      'matutino': 'Matutino',
      'vespertino': 'Vespertino',
      'noturno': 'Noturno',
     },
  },
  {
    title: 'Informe seu período',
    input: 'select',
    inputOptions: {
      '1° semestre': '1° Semestre',
      '2° semestre': '2° Semestre',
      '3° semestre': '3° Semestre',
      '4° semestre': '4° Semestre',
      '5° semestre': '5° Semestre',
      '6° semestre': '6° Semestre',
     },
  },
  {
    title: 'Informe sua turma',
    input: 'select',
    inputOptions: {
      'turma a': 'Turma A',
      'turma b': 'Turma B',
      'turma c': 'Turma C',
      'turma d': 'Turma D',
     },
  },
  {
    title: 'Detalhe seu pedido',
    input: 'textarea',
    inputPlaceholder:'Digite aqui'
  },
  {
    title: 'Deseja enviar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#159952',
    cancelButtonColor:'#37393B',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }
])
.then((result) => {
  if (result.value) {
    Swal.fire(
      'Parabéns!',
      'Seu requerimento foi enviado com sucesso!',
      'success',
    )
  } else if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire(
      'Cancelado',
      'Seu requerimento foi cancelado :)',
      'error'
    )
  }
})
 });

 

  