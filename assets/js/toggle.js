const $toggle = document.querySelector('.toggle')
const $sidebar = document.querySelector('.sidebar')
const $wrapper = document.querySelector('.wrapper')
const $email = document.querySelector('.email')
const $gsuit = document.querySelector('.gsuit')
const $pmjp = document.querySelector('.pmjp')

$toggle.addEventListener('click', () =>{
    $toggle.classList.toggle('active')
    $sidebar.classList.toggle('active')
    // $wrapper.classList.toggle('active')
})

$email.addEventListener('click', () => {
    $sidebar.classList.remove('active')
    $toggle.classList.remove('active')
})

$gsuit.addEventListener('click', () => {
    $sidebar.classList.remove('active')
    $toggle.classList.remove('active')
})

$pmjp.addEventListener('click', () => {
    $sidebar.classList.remove('active')
    $toggle.classList.remove('active')
})