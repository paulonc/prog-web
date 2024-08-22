const colocarTodasLetrasEmMaiusculoEm500ms = async (entrada) => {
  if (typeof entrada !== "string") {
    throw new Error("O parâmetro deve ser uma string");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  return entrada.toUpperCase();
};

const inverterTodasLetras = async (entrada) => {
  if (typeof entrada !== "string") {
    throw new Error("O parâmetro deve ser uma string");
  }

  return entrada.split("").reverse().join("");
};

const processarString = async (entrada) => {
  try {
    const stringMaiuscula = await colocarTodasLetrasEmMaiusculoEm500ms(entrada);
    console.log("String em maiúsculas:", stringMaiuscula);

    const stringInvertida = await inverterTodasLetras(stringMaiuscula);
    console.log("String invertida:", stringInvertida);
  } catch (error) {
    console.error("Erro:", error.message);
  }
};

processarString("Uma frase qualquer");
processarString(12345);
