var text=document.querySelector('.main h1').textContent
var splittedText=text.split("")


var clutter="";
splittedText.forEach(function(data){
    clutter+=`<span>${data}</span>`;
})
// console.log(clutter)
document.querySelector('.main h1').innerHTML=clutter;
console.log(text)

// var anime=document.querySelector('span')

gsap.to('h1 span',{
    color:"white",
    duration:1,
    opacity:1,
    stagger:.2,
    delay:.3,
    y:-80,
})

