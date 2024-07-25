let text=document.querySelectorAll('.text');
let color= document.querySelector('.color');
let remove= document.querySelector('.remove');
let style= document.querySelector('.style');

color.addEventListener('click', ()=>{
    text.forEach((element)=>{
        element.style.color='red';
    })
})
remove.addEventListener('click', ()=>{
    text.forEach((element)=>{
        element.innerHTML='';
    })
})
style.addEventListener('click', ()=>{
    text.forEach((element)=>{
        element.style.fontWeight='bold';
    })
})