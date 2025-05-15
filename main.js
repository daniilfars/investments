function update() {
  let money = +document.querySelector('.money').value
  let year = +document.querySelector('.year').value
  let result = money + money * 0.12 * year
  document.querySelector('.result').textContent = result
}

document.querySelector('.money').addEventListener('input', update)

document.querySelector('.year').addEventListener('input', update)