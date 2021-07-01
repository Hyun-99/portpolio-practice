'use strict';

// 화면이 스크롤되면 메뉴바에 색이 나타나는 효과(내려오지 않으면 투명)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
})


// 메뉴를 클릭하면 해당 섹션으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollToView(link);
})


// Contact 버튼을 누르면 Contact파트로 가게 하기
const contactBtn = document.querySelector('.home__contact');
    contactBtn.addEventListener('click', ()=>{
    scrollToView('#contact');
})


// 화면이 스크롤되면 Home의 내용이 희미해지게 하기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
      document.addEventListener('scroll',()=>{
      home.style.opacity = 1 - window.scrollY / homeHeight;
})







function scrollToView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


