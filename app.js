const mountainBlue = document.querySelector("#mountain-blue")
const mountainRed = document.querySelector("#mountain-red")
const tressLeft = document.querySelector("#trees-left")
const tressBottom = document.querySelector("#trees-bottom")
const man = document.querySelector("#man")
const plants = document.querySelector("#plants")
const titulo = document.querySelector("#titulo")

window.addEventListener("scroll", () => {
  let scroll = window.scrollY

  mountainBlue.style.left = scroll * 1 + "px" 
  mountainRed.style.left = scroll * 0.5 + "px"

  tressLeft.style.bottom = scroll * -0.5 + "px"
  tressLeft.style.right = scroll *  2 + "px"

  tressBottom.style.right = scroll * 2 + "px"
  man.style.right = scroll + "px"
  plants.style.right = scroll * 2 + "px"
  titulo.style.right = scroll * 4 + "px"
})
