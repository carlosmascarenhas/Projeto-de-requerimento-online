/**
 * Surely there's some improvements to make, comments/help always appreciated :3
 */

function init() {
  // Generate li foreach fieldset
  for (var i = 0; i < count; i++) {
    var ul = document.querySelector('ul.itens'),
        li = document.createElement("li");

    ul.appendChild(li);
  }
  // Add class active on first li
  ul.firstChild.classList.add('active');
}

function next(target) {
  var input = target.previousElementSibling;

  // Check if input is empty
  if (input.value === '') {
    body.classList.add('error');
  } else {
    body.classList.remove('error');

    var enable = document.querySelector('.abas.on'),
        nextEnable = enable.nextElementSibling;
    enable.classList.remove('on');
    enable.classList.add('off');
    nextEnable.classList.add('on');

    // Switch active class on left list
    var active = document.querySelector('ul.itens li.active'),
        nextActive = active.nextElementSibling;
    active.classList.remove('active');
    nextActive.classList.add('active');
  }
}

function keyDown(event) {
  var key = event.keyCode,
      target = document.querySelector('.abas.on .button');
  if (key == 13 || key == 9) next(target);
}

var body = document.querySelector('body'),
    form = document.querySelector('form'),
    count = form.querySelectorAll('.abas').length;

window.onload = init;
document.body.onmouseup = function (event) {
    var target = event.target || event.toElement;
    if (target.classList.contains("button")) next(target);
};
document.addEventListener("keydown", keyDown, false);
