const input = document.getElementById("btn")
const container = document.querySelector(".container")
input.addEventListener("click",()=>{
    const numsquares= document.getElementById("squares")
    const value = numsquares.value;
    const number = parseInt(value);
    container.innerHTML = ""
    for(let i = 0; i<number; i++){
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
    const tiles = document.querySelectorAll(".tile")

    tiles.forEach((div) => {
    div.addEventListener("mouseenter", ()=> {
        div.style.backgroundColor = getRandomColor();
    });

});

}
)
const reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    container.innerHTML = ""
    }
)

function getRandomColor(){
    let randomLetter = "0123456789abcdegf"
    let randomColor = '#';
    for(let i = 0; i < 6; i++){

        randomColor = randomColor + randomLetter[Math.floor(Math.random() * randomLetter.length)]
    } 
    return randomColor;
}