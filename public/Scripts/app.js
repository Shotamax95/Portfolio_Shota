// Custom JavaScript

// (function(){

//     function Start(){
//         console.log(`%c App Started...`,
//         "font-size: 20px; color: blue; font-weight: bold"); 
//     }

//     window.addEventListener("load", Start);
// })();

const text = document.querySelector('.name'); // to get name
const strText = text.textContent;
const splitText = strText.split(""); // split my name 
text.textContent =""; // reset name

// asign span for each char
for(let i = 0; i < splitText.length; i++)
{
    text.innerHTML +="<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char]; // to get span (all letters)
    span.classList.add('fade');
    char++;
    if(char === splitText.length)
    {
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}