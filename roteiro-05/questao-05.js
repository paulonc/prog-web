const crypto = require("crypto");

const criptografarMensagem = (texto, chaveSecreta) => {
  const algorithm = "aes-256-cbc";
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(chaveSecreta),
    iv
  );
  let encrypted = cipher.update(texto, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
};

const decriptografarMensagem = (textoCriptografado, chaveSecreta) => {
  const algorithm = "aes-256-cbc";
  const [ivHex, encrypted] = textoCriptografado.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(chaveSecreta),
    iv
  );
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

const processarNumeros = (numeros, criptografar) => {
  return numeros
    .filter((num) => num % 2 === 0)
    .map((num) => criptografar(num.toString(), chaveSecreta));
};

const processarCriptografados = (numsCriptografados, descriptografar) => {
  return numsCriptografados.map((numCripto) => {
    const descriptografado = descriptografar(numCripto, chaveSecreta);
    return parseInt(descriptografado, 10);
  });
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chaveSecreta = "12345678901234567890123456789012";

const numsCriptografados = processarNumeros(numeros, criptografarMensagem);
console.log("Números Criptografados:", numsCriptografados);

const numsDescriptografados = processarCriptografados(
  numsCriptografados,
  decriptografarMensagem
);
console.log("Números Descriptografados:", numsDescriptografados);
