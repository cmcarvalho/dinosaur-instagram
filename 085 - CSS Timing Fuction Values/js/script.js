const myButton = document.getElementById("btn")
const image01 = document.querySelector(".linear")
const image02 = document.querySelector(".ease")
const image03 = document.querySelector(".ease-in")
const image04 = document.querySelector(".ease-in-out")
const image05 = document.querySelector(".ease-out")
const image06 = document.querySelector(".steps")
const image07 = document.querySelector(".cubic-bezier")

function handleClick() {
    // image01.style.left = "20px"
    image02.classList.toggle('animated-image');
}

myButton.addEventListener("click", handleClick)