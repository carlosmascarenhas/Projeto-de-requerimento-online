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

$("#detalhe_pedido").click(function(){
  document.getElementById("modal").innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Detalhamento do pedido</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Curso:</label>
              <input type="text" class="form-control" id="recipient-name" placeholder="Informe o seu curso">
            </div>
            <div class="form-group">
            <label for="recipient-name" class="col-form-label">Período:</label>
            <input type="text" class="form-control" id="recipient-name" placeholder="Informe seu período">
          </div>
          <div class="form-group">
          <label for="recipient-name" class="col-form-label">Turno:</label>
          <input type="text" class="form-control" id="recipient-name" placeholder="Informe o seu turno">
        </div>
        <div class="form-group">
        <label for="recipient-name" class="col-form-label">Turma:</label>
        <input type="text" class="form-control" id="recipient-name" placeholder="Informe sua turma">
      </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Mensagem:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-outline-success">Enviar</button>
        </div>
      </div>
    </div>
  </div>`

})


