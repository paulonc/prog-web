const ehPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
};

const imprimirPrimos = (inicio=0, fim=100) => {
    if (inicio > fim) [inicio, fim] = [fim, inicio];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) console.log(i);
    }
}


imprimirPrimos();
// imprimirPrimos(10, 20);
// imprimirPrimos(30, 70);
