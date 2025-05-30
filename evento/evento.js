 const btn = document.querySelector("button");

 function random(number){
     return Math.floor(Math.random() * (number +1));
 }
 btn.addEventListener("click", () =>{
     const rndCol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`;
     document.body.style.backgroundColor = rndCol;
        btn.style.position = 'relative';
        btn.style.top ='50px';
        btn.style.left = '100px';

 })

const texto = document.querySelector('input[type="text"]');

texto.addEventListener("mouseover", (Event)=>{
    Event.target.style.backgroundColor = "pink";
    
})

texto.addEventListener("mousout", (Event)=> {
    Event.target.style.backgroundColor = "";
})


const calcula = document.querySelector("1")


