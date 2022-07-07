const imageContainer = document.querySelector('.imageContainer')
const percentageText = document.createElement('h1')
const image = document.querySelector('img')

let i = 0

imageContainer.appendChild(percentageText)

const interval = setInterval(() => {
    percentageText.textContent = `${i}%`
    image.style.filter = `blur(${(100 - i) * 0.1}px)`
    if (i >= 100) clearInterval(interval)
    i++
}, 100)

