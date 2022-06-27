function task1 () {
  const input = document.getElementById('input');
  if (input.value.trim().length) { document.getElementById('button').hidden = false; } else { document.getElementById('button').hidden = true; }
}

function task2 () {
  const d = document.createElement('p');
  d.setAttribute('class', 'par');
  d.innerHTML = document.getElementById('input').value;
  document.body.appendChild(d);
}

function task3 () {
  const paragraphsList = document.querySelectorAll('.par');
  if (paragraphsList.length <= 5) { return; }
  const n = paragraphsList[0];
  n.parentNode.removeChild(n);
}

const exportedFunction =
  {
    task1,
    task2,
    task3
  };

module.exports = exportedFunction;
