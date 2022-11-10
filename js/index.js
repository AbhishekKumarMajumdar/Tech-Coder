const text = document.querySelector("#text");
const text1 = document.querySelector("#text1");
const Astro = document.querySelector("#Astro");
const dron = document.querySelector(".dron");

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    text.style.marginRight = value*2 + 'px';
    text1.style.marginLeft = value*2 + 'px';
    dron.style.marginTop = value*1.04 + 'px';
    dron.style.marginLeft = value*-1 + 'px';
    Astro.style.marginTop = value*1.04 + 'px';
    Astro.style.marginLeft = value*0.8 + 'px';
});


const sec = document.querySelector("#sec");
const nav = document.querySelector("#nav");

const observer = new IntersectionObserver((e)=>{
    const chiku = e[0];
    chiku.isIntersecting == true ? nav.classList.add("sticky"):nav.classList.remove("sticky");
 },{
    root:null,
    rootMargin:"",
    threshold:"",
});
observer.observe(sec);
