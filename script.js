const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')

const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1621343498292-eb469c743b25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="image was supposed to be here I dont know what happened.... My bad :("/>'
    title.innerHTML = ' words words words'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg"alt="sajfoaijwoie"/>'
    name.innerHTML = 'john doe'
    date.innerHTML = 'October 20, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
     animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}