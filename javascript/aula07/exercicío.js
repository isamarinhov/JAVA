let altura = Number(prompt(`qual sua altura:`))
let peso = Number(prompt(`qual seu peso:`))

function calculaIMC(altura, peso) {
    let imc = peso / (altura * altura)

    if (imc < 16.9) {
        alert(` você está Muito abaixo do peso ${imc.toFixed(2)}`)
    } else if (imc <= 18.4) {
        alert(`você está abaixo do peso${imc.toFixed(2)}`)
    } else if (imc <= 24.9) {
        alert(`você está com peso normal${imc.toFixed(2)}`)
    } else if (imc <= 29.9) {
        alert(`você está acima do peso${imc.toFixed(2)}`)
    } else if (imc <= 34.9) {
        alert(`você está com obesidade grau I ${imc.toFixed(2)}`)
    } else if (imc <= 40) {
        alert(`você está comobesidade grau II ${imc.toFixed(2)}`)
    } else {
        `voce está com obesidade grau III ${imc.toFixed(2)}`
    }
}
calculaIMC(altura, peso)