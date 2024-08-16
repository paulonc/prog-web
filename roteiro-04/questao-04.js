const somarParesConsecutivos = x => {
    const inicio = x % 2 === 0 ? x : x + 1;

    const numbers =  Array.from({ length: 5 }, (_, i) => inicio + i * 2);
    
    const somar = (total, inicio) => total + inicio;
    const soma = numbers.reduce(somar, 0);

    console.log(soma);
}

somarParesConsecutivos(4);
somarParesConsecutivos(11);