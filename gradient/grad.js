const backgroundDiv = document.getElementById('background')
const generateButton = document.getElementById('generate')
const gradientTypeSelect = document.getElementById('gradient-type')
const angleInput = document.getElementById('angle')
const color1Input = document.getElementById('color-1')
const color2Input = document.getElementById('color-2')
const copyButton = document.getElementById('copy')
const message = document.querySelector('.message')
angleInput.addEventListener('input', gradientCustom)
color1Input.addEventListener('input', gradientCustom)
color2Input.addEventListener('input', gradientCustom)
const p1 = document.getElementById('p1')

function gradientCustom() {
  const color1 = color1Input.value
  const color2 = color2Input.value
  const angle2 = angleInput.value
  const gradientType = gradientTypeSelect.value
  let gradient
  if (gradientType === 'linear') {
    gradient = `linear-gradient(${angle2}deg, ${color1}, ${color2})`
    generateButton.style.background = gradient
    copyButton.style.background = gradient
  } else if (gradientType === 'radial') {
    gradient = `radial-gradient(circle, ${color1}, ${color2})`
    generateButton.style.background = gradient
    copyButton.style.background = gradient
  }
  function copyToClipboard() {
    const el = document.createElement('textarea')
    el.value = `background: ${gradient};`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    message.classList.add('show')
    message.innerHTML = `<h5>${gradient}</h5>`
    setTimeout(() => {
      message.classList.remove('show')
    }, 3000)
  }
  copyButton.addEventListener('click', copyToClipboard)
  backgroundDiv.style.background = gradient
}
function generateGradient() {
  const colors = [
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`, // Random hex color
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`, // Random hex color
  ]
  const angle = Math.floor(Math.random() * 361) // Random angle between 0 and 360 degrees
  const gradientType = gradientTypeSelect.value
  console.log(colors[0], colors[1])
  let gradient
  if (gradientType === 'linear') {
    gradient = `linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})`
    const angleInput = (document.getElementById('angle').value = `${angle}`)
    const color1Input = (document.getElementById(
      'color-1'
    ).value = `${colors[0]}`)
    const color2Input = (document.getElementById(
      'color-2'
    ).value = `${colors[1]}`)
    generateButton.style.background = gradient
    copyButton.style.background = gradient
  } else if (gradientType === 'radial') {
    gradient = `radial-gradient(circle, ${colors[0]}, ${colors[1]})`
    const angleInput = (document.getElementById('angle').value = `${0}`)
    const color1Input = (document.getElementById(
      'color-1'
    ).value = `${colors[0]}`)
    const color2Input = (document.getElementById(
      'color-2'
    ).value = `${colors[1]}`)
    generateButton.style.background = gradient
    copyButton.style.background = gradient
  }
  function copyToClipboard() {
    const el = document.createElement('textarea')
    el.value = `background: ${gradient};`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    message.classList.add('show')
    message.innerHTML = `<h5>${gradient}</h5>`
    setTimeout(() => {
      message.classList.remove('show')
    }, 3000)
  }
  copyButton.addEventListener('click', copyToClipboard)
  backgroundDiv.style.background = gradient
  p1.style.background = gradient
}
generateGradient()
gradientTypeSelect.addEventListener('change', generateGradient)
gradientTypeSelect.addEventListener('change', gradientCustom)
generateButton.addEventListener('click', generateGradient)