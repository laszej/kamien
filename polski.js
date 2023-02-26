const weapons = ["kamień", "papier", "nożyce"]
const startBtn = document.getElementById("startBtn")
const pWeapon = document.getElementById("pWeapon")
const cWeapon = document.getElementById("cWeapon")
const result = document.getElementById("result")
const demo = document.getElementById("demo")


const icons = [`<img src="kamień.svg" class="weapon">`, `<img src="papier.svg" class="weapon">`,
 `<img src="nożyce.svg" class="weapon">`]

const compNumber = ()=> {return Math.floor(Math.random() * weapons.length)}

startBtn.addEventListener("click", randomWeapon)

function randomWeapon(){
let choose = document.getElementById("select").value      
let compRand = compNumber()
let playerWeapon = choose

pWeapon.innerHTML = `Twoja broń to: ${playerWeapon}`
playerWeapon === "kamień" ? pWeapon.innerHTML+= " " +icons[0]:
playerWeapon === "papier" ? pWeapon.innerHTML+= " " +icons[1]:
pWeapon.innerHTML+= " " +icons[2]

let computerWeapon = weapons[compRand]
cWeapon.innerHTML = `Broń komputera to: ${computerWeapon}`
computerWeapon === "kamień" ? cWeapon.innerHTML+= " " + icons[0]:
computerWeapon === "papier" ? cWeapon.innerHTML+= " " + icons[1]:
cWeapon.innerHTML+= " " +icons[2]

playerWeapon === computerWeapon ? result.innerHTML= "Remis" : 

playerWeapon === "papier" && computerWeapon === "nożyce" 
? result.innerHTML= "Przegrałeś!" : 

playerWeapon === "kamień" && computerWeapon === "papier" 
? result.innerHTML= "Przegrałeś!" : 

playerWeapon === "nożyce" && computerWeapon === "kamień" 
? result.innerHTML= "Przegrałeś!" : 

result.innerHTML= "Wygrałeś!"
}



