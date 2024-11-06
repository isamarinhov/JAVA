let valorNum = [2,4,6,8,10,12,14,16,18,20]
let novoArray= valorNum.map((numero)=>{
  console.log(`valor em texto: ${numero.toString()}`);
})
let arrayTexto = valorNum.map((num)=>{
  return num.toString()
})
console.log(typeof arrayTexto[2]);//informar o tipo do dado e mostra o array na posição 6
console.log(arrayTexto[2]);
//map cria uma nova variavel
//vai passar uma de cada vez para todos os elementos do aray
//ele puxa o nome do let;2,4,6,8,10 não  nome da variavel = valorNum,novoArray.