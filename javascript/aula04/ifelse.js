let nota1, nota2, media, faltas
nota1 = 10
nota2 = 10
faltas = 10
media= (nota1 + nota2) /2

if( media >= 7 && faltas < 6){
//true
console.log(`aluno aprovado`);
}else if (media >= 6.5 && faltas <=5)
{
  console.log(`aluno aprovado por conselho`);
}else if (media >6 && faltas <6)
{
console.log(`atividade de rep.${media}`);
media+= 0.5
console.log(media);
}else{
  console.log(`aluno reprovado`);
}
console.log(`fim`);