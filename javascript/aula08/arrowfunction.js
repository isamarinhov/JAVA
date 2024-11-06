//function CalcularMedia(n1 =0, n2=0){
//  let ValorMedia=(n1 +n2) /2
//  return ValorMedia
//}
//console.log(`A média do aluno é ${CalcularMedia(10,8)}`);

const calcularImc =(altura, peso)=>{
let imc =peso/(altura * altura)
return imc
}
console.log(`O IMC do usuario é ${calcularImc(1.60,60).toFixed(2)}`);