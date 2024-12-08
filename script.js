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
    '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXZXZy9qEC0Zo_IknnxmIgmPww7rnyXlnnWtRnHDLysLSZPXT8bSmKcQW_9ASR7PciA8rWB0SuBlp8-Q5h0fvUrMqlmny6ZQayN8aZTGqaNxIEuyGf83kATwtX4duRyVexThPWHtEEv3rL8NgC9LfDDH9NwZvQ3JpRaVNHT8ScH3wglTaylA5DGlyR-Njn/s3020/IMG-20241207-WA0011.jpg" alt="Tahir Project" />'
  title.innerHTML = 'Who is Tahir Naseer'
  excerpt.innerHTML =
    'He is an Cybersecurity & Computer Engineer and passionate about AI and Software Solutions. With key projects like TahirGPT AI Chatbot, Password Generator,Login to TahirGPT, Code-Visualizer Etc..'
  profile_img.innerHTML =
    '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqKiEDJKDx7ffZdB83Ugq_IEXVcKsv6F3aXhP6-_2L9FXOXr5oQ3rM0riHsGtdCV8lNFmziH3HGAEMSRb_EXBhgfldZ293ptb2-xSGp3x2FTD1Ko2XvJEgnkvFBQl53geK72JwXJ3fw1II6k-683dTN1MI0BxGxwlbrawgL3XewmcvusCsh-yLaYQ-YCM4/s4096/file.png" alt="" />'
  name.innerHTML = 'Tahir Naseer'
  date.innerHTML = '26-11-2024'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
