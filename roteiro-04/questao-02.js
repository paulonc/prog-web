const obj1 = { id: 1, nome: "Progressão Aritmética", n: 10, a1: 1, r: 2 };
const obj2 = { id: 2, nome: "Progressão Geométrica", n: 10, a1: 1, r: 2 };

const calcularPA = ({n, a1, r}) => {
    let somaPA = 0;
    let termo = a1;
    for (let i = 1; i<=n; i++) {
        console.log(`${i} - ${termo}`);
        somaPA += termo;
        termo += r;
    }
    return somaPA;
}

const calcularPG = ({n, a1, r}) => {
    let somaPG = 0;
    let termo = a1;
    for (let i = 1; i<=n; i++) {
        console.log(`${i} - ${termo}`);
        somaPG += termo;
        termo *= r;
    }
    return somaPG;
}

console.log(obj1.nome);
const somaPA = calcularPA(obj1);
console.log(`A soma da PA é ${somaPA}\n`);

console.log(obj2.nome);
const somaPG = calcularPG(obj2);
console.log(`A soma da PG é ${somaPG}\n`);

