nav_list = document.querySelector('#nav-list')
rightnav = document.querySelector('.rightnav')

burger=document.querySelector('#burger')

navbar= document.querySelector('#navbar')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle("v-no")
    nav_list.classList.toggle("v-no")
    navbar.classList.toggle("h-nav")


})