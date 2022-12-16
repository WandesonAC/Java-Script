var horatual = new Date()
var hora = horatual.getHours()
var min = horatual.getMinutes()
var sec = horatual.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${sec}`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}