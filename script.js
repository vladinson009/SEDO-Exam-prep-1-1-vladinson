function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const first = Number(document.getElementById('a').value);
  const second = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(first, second);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const first = Number(document.getElementById('a').value);
  const second = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(first, second);
});
//TODO: Tasks todo
