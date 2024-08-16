notas = [0.0, 4.9, 5.0, 6.9, 7.0, 8.9, 9.0, 10.0]

const conceitos_map = n => {
    return n <= 4.9 ? 'D' :
    n <= 6.9 ? 'C' :
    n <= 8.9 ? 'B' :
    'A';
}

conceitos = notas.map(conceitos_map)
console.log(conceitos)