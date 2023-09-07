
const array = [];
const alunos = array.map((nome, nota) => {
    nome = {
        nome: nome
    };
    nota = {
        nota: nota
    };
    return nome, nota;
});
alunos.push({
    nome: 'Pedro',
    nota: 6
});
alunos.push({
    nome: 'Vitor',
    nota: 3
});
alunos.push({
    nome: 'Robson',
    nota: 10
});
alunos.push({
    nome: 'Ana',
    nota: 1
});
alunos.push({
    nome: 'Jonas',
    nota: 7
});
function filtrarMedia(nota) {
    return nota.nota >= 6;
}
const alunosAprovados = alunos.filter(filtrarMedia)
console.log(alunosAprovados);