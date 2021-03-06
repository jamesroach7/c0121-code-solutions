var chars = document.querySelector('h1');

var i = 0;

chars.children[0].className = 'current';

function type(event) {
  if (chars.children[i].textContent !== event.key) {
    chars.children[i].className = 'incorrect current';
  } else {
    if (i !== chars.children.length - 1) {
      chars.children[i].className = 'correct';
      chars.children[i + 1].className = 'current';
    } else {
      chars.children[i].className = 'correct';
    }
    i++;
  }
}

window.addEventListener('keydown', type);
