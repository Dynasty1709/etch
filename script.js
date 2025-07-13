const input = document.getElementById("btn")
const container = document.querySelector(".container")
input.addEventListener("click",()=>{
    const numsquares= document.getElementById("squares")
    const value = numsquares.value;
    const number = parseInt(value);
    if (number >0 && number <=100){
        container.innerHTML = ""
        let containerSize = 100/number
        for(let i = 0; i<number * number; i++){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.height = `${containerSize}%` 
            tile.style.width = `${containerSize}%`
            container.appendChild(tile);

        }
        const tiles = document.querySelectorAll(".tile")

        tiles.forEach((div) => {
        div.addEventListener("mouseenter", ()=> {
            div.style.backgroundColor = getRandomColor();
    });
    });
    }else{
        alert("Please enter a number between 1 and 100");
    }
}
)
const reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    container.innerHTML = ""
    }
)

function getRandomColor(){
    let randomLetter = "0123456789abcdef"
    let randomColor = '#';
    for(let i = 0; i < 6; i++){

        randomColor = randomColor + randomLetter[Math.floor(Math.random() * randomLetter.length)]
    } 
    return randomColor;
}