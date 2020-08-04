//defines each variable as constant
const range = document.getElementById('range')
const slider = document.getElementById('slider')
const ucaseElement = document.getElementById('ucase')
const lcaseElement = document.getElementById('lcase')
const numElement = document.getElementById('num')
const specialElement = document.getElementById('special')
const form = document.getElementById('passwordgenform')
const p = document.getElementById('p')
//defines each of the variable to be uppercase
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
//to make it lowercase
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
//to be number
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
//to be special character
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
//uses eventListener to make the slider work
slider.addEventListener('input', syncsliders)
range.addEventListener('input', syncsliders)
//collects the choice and check 
form.addEventListener('submit', e => {
  e.preventDefault()
  const sliders = slider.value
  const ucase = ucaseElement.checked
  const lcase = lcaseElement.checked
  const num = numElement.checked
  const special = specialElement.checked
  const password = generatePassword(sliders, ucase, lcase, num, special)
  p.innerText = password
})

function generatePassword(sliders, ucase, num, special) {
  let lcase = LOWERCASE_CHAR_CODES
  if (ucase) lcase = lcase.concat(UPPERCASE_CHAR_CODES)
  if (special) lcase = lcase.concat(SYMBOL_CHAR_CODES)
  if (num) lcase = lcase.concat(NUMBER_CHAR_CODES)
//Randomize Password
  const passwordCharacters = []
  for (let i = 0; i < sliders; i++) {
    const characterCode = lcase[Math.floor(Math.random() * lcase.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncsliders(e) {
  const value = e.target.value
  slider.value = value
  range.value = value
}