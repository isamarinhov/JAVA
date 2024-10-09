let nome =" giovanni";
let idade= 19;
let matriculaAtiva= true;


console.log(`==============`);
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof matriculaAtiva);
console.log(`===============`);

let res = idade >= 15 ? 'pode fazer o curso': 'não podefazer o curso';

console.log(`o aluno ${res}`); 
//peça ao usuário para informar se ele é aluno (sim ou não) e armazene essa informação na variável. log informe se o aluno está matriculado

let aluno = 'sim'
let matricula = aluno == 'sim'? 'o aluno está matriculado': 'o aluno não está matriculado';

console.log(matricula);
