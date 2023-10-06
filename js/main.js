let buttons = document.getElementsByTagName('button')
let num = 0
let count = document.getElementById('count')

let btn1 = buttons[0]
let btn2 = buttons[1]
let btn3 = buttons[2]


btn1.addEventListener('click', () => {
    num ++
    count.textContent = num
    updateColor()
})


btn3.addEventListener('click', () => {
    num --
    count.textContent = num
    updateColor()
})

btn2.addEventListener('click', () => {
    num = 0
    count.textContent = num
    updateColor()
})


function updateColor() {
    if (num > 0) {

    count.style.color = "green"
}else if (num < 0){

    count.style.color = "red"
} else {
    count.style.color = "black"
    
}
}

