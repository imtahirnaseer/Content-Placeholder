const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="" alt="" />'
  title.innerHTML = 'Who is Tahir Naseer'
  excerpt.innerHTML =
    'He is an Cybersecurity & Computer Engineer and passionate about AI and Software Solutions. With key projects like TahirGPT AI Chatbot, Password Generator,Login to TahirGPT, Code-Visualizer Etc..'
  profile_img.innerHTML =
    '<img src="" alt="" />'
  name.innerHTML = 'Tahir Naseer'
  date.innerHTML = '26-11-2024'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}