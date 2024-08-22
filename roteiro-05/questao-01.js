const dono = {
  proprietario: "Silvio Santos",
  endereco: {
    cep: "hacked, pay to recover",
    logradouro: "hacked, pay to recover",
    complemento: "hacked, pay to recover",
    bairro: "hacked, pay to recover",
    localidade: "hacked, pay to recover",
    uf: "",
    geo: {
      lat: "-23.61919020307765",
      lng: "-46.70793551534256",
    },
  },
};

function buscarDadosCEP(cep) {
  return new Promise((resolve, reject) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro");
        }
        return response.json();
      })
      .then((data) => {
        dono.endereco.cep = data.cep;
        dono.endereco.bairro = data.bairro;
        dono.endereco.localidade = data.localidade;
        dono.endereco.uf = data.uf;
        resolve(dono);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const cep = "05650-000";

buscarDadosCEP(cep)
  .then((donoAtualizado) => {
    const {
      proprietario,
      endereco: {
        cep,
        bairro,
        localidade,
        geo: { lat, lng },
      },
    } = donoAtualizado;
    const resultado = `${proprietario} - ${cep} - ${bairro}, ${localidade} (${lat}, ${lng})`;
    console.log(resultado);
  })
  .catch((error) => {
    console.error("Erro ao buscar dados do CEP:", error);
  });
