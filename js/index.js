const loader = document.querySelector(".loader");
window.addEventListener("load", function(){
    loader.style.display="none"
});

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
    Astro.style.marginButtom = value*1.04 + 'px';
    Astro.style.marginLeft = value*1 + 'px';

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
// line

const services = document.querySelector(".services");
const Fline = document.querySelector(".f-line");

const Lineobserver = new IntersectionObserver((el)=>{
    const line = el[0];
    line.isIntersecting == true ? Fline.classList.add("try"):Fline.classList.remove("try");
 },{
    root:null,
    rootMargin:"",
    threshold:"",
});
Lineobserver.observe(services);


const web = document.querySelector(".web");
services.addEventListener("scroll",function(){
    let value1 = window.scrollY;
    web.style.marginLeft = value1*1 + 'px';

});

//
