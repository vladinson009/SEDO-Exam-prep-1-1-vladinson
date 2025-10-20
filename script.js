function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (!a || !b) {
    console.log('All fields are required!');

    return;
  }
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  // Comment Here 3!
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});
document.getElementById('btn-multiply').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = multiply(a, b);
});
