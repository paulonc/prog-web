const colocarTodasLetrasEmMaiusculoEm500ms = (msg) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new Error("O parâmetro deve ser uma string"));
    } else {
      setTimeout(() => {
        resolve(msg.toUpperCase());
      }, 500);
    }
  });
};

const inverteTodasLetras = (msg) => {
  return new Promise((resolve) => {
    if (typeof msg !== "string") {
      reject(new Error("O parâmetro deve ser uma string"));
    } else {
      resolve(msg.split("").reverse().join(""));
    }
  });
};

colocarTodasLetrasEmMaiusculoEm500ms("Uma frase qualquer")
  .then((stringMaiuscula) => {
    console.log("String em maiúsculas:", stringMaiuscula);
    return inverteTodasLetras(stringMaiuscula);
  })
  .then((stringInvertida) => {
    console.log("String invertida:", stringInvertida);
  })
  .catch((error) => {
    console.error("Erro:", error.message);
  });

colocarTodasLetrasEmMaiusculoEm500ms(12345)
  .then((stringMaiuscula) => {
    return inverteTodasLetras(stringMaiuscula);
  })
  .then((stringInvertida) => {
    console.log("String invertida:", stringInvertida);
  })
  .catch((error) => {
    console.error("Erro:", error.message);
  });
