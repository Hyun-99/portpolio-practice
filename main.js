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


// 화면이 스크롤되면 위로가기 버튼이 나타나게 하기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight){
        arrowUp.classList.add('visible');
    }
    else{
        arrowUp.classList.remove('visible');
    }
})


// Arrow-up 버튼을 누르면 위로 올라가게 하기
arrowUp.addEventListener('click', ()=>{
    scrollToView('#home');
})



// 프로젝트 필터링
const workBtncontainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtncontainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // 버튼을 클릭하면 색이 들어오게 만들기
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');

   setTimeout(()=>{
    projects.forEach((project)=>{
        if(filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        }
        else{
            project.classList.add('invisible');
        }
       });
    projectContainer.classList.remove('anim-out');
   },300)
})





function scrollToView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


