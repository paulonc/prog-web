function verificaApresentacaoTCC(diaEntrega, prazoFinal) {
  if (diaEntrega > prazoFinal) {
    console.log("Eu odeio o prof. Florovsky!");
  } else if (prazoFinal - diaEntrega >= 3) {
    console.log("Muito bem! O aluno está apto a apresentar até o natal!");
  } else {
    console.log("O trabalho está muito ruim!");
    prazoFinal += 2;

    if (prazoFinal <= 24) {
      console.log("TCC Apresentado!");
    } else {
      console.log("Não deu! Só no próximo ano agora.");
    }
  }
}

verificaApresentacaoTCC(13, 19);
verificaApresentacaoTCC(22, 23);
verificaApresentacaoTCC(21, 22);
verificaApresentacaoTCC(24, 23);
