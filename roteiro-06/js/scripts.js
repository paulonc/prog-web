//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
    //TODO
    let texto1 = document.getElementById('texto1');
    let input1 = document.getElementById('input1');
    if (input1.value) texto1.textContent = input1.value;

    let texto2 = document.getElementById('texto2');
    let input2 = document.getElementById('input2');
    if (input2.value) texto2.textContent = input2.value;

    let texto3 = document.getElementById('texto3');
    let input3 = document.getElementById('input3');
    if (input3.value) texto3.textContent = input3.value;
}

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
    let ul = document.getElementById('listaItens');
    let qtde = ul.children.length;
    var li = document.createElement("li");
    li.textContent= `Item ${qtde + 1}`;
    ul.appendChild(li);    
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
    //TODO
    let ul = document.getElementById('listaItens');
    let qtde = ul.children.length;
    if (qtde > 1) ul.removeChild(ul.lastChild);
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
    const inputs = document.querySelectorAll('input[type="text"]');
    //TODO
    const cor = document.getElementById("inputCor").value;
    inputs.forEach(element => element.style.backgroundColor = cor);

}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
    estilo = 'none'
    //TODO
    const img = document.getElementById("imagem");
    img.style.display = estilo;

}

function exibirImagem() {
    estilo = 'block'
    //TODO
    const img = document.getElementById("imagem");
    img.style.display = estilo;
}

//Etapa 4: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
    const box = document.getElementById('divDeslizavel');
    let left = parseInt(window.getComputedStyle(box).left) || 0;
    let top = parseInt(window.getComputedStyle(box).top) || 0;
    
    switch (direcao) {
        case 'esquerda':
            //TODO
            left -= 10;
            box.style.left = `${left}px`;
            break;
        case 'direita':
            //TODO
            left += 10;
            box.style.left = `${left}px`;
            break;
        case 'cima':
            //TODO
            top -= 10;
            box.style.top = `${top}px`;
            break;
        case 'baixo':
            //TODO
            top += 10;
            box.style.top = `${top}px`;
            break;
    }
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
    const p = document.getElementById('classeParagrafo');
    //TODO
    p.classList.toggle('classeAzul');
    p.classList.toggle('classeVermelha');

    if (p.classList[0] == "classeVermelha") p.textContent = "Este parágrafo é da classe vermelha.";
    if (p.classList[0] == "classeAzul") p.textContent = "Este parágrafo é da classe azul.";
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
    const imagemMaior = document.getElementById('imagem-maior');
    //TODO
    let srcImg = img.src;
    let newSrc = srcImg.replace("100", "300");
    imagemMaior.src = newSrc;
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('mensagem-erro');

    if (nome.trim() === '') {
        erro.textContent = 'O nome não pode ser vazio'
        return false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        erro.textContent = 'O CPF deve estar no formato XXX.XXX.XXX-XX e ter 14 digitos';
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        erro.textContent = 'O email deve conter pelo menos um @ e um ponto duas posições após o @';
        return false; 
    }

    if (senha.length < 8) {
        erro.textContent = 'A senha deve ter pelo menos 8 caracteres';
        return false;
    }

    erro.textContent = '';    
    return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = document.getElementById('contador').textContent;
function incrementar() {
    contador++;
    geraMusicaElefante(contador);
    document.getElementById('contador').textContent = contador;
}

function decrementar() {
    if (contador > 0) {
        contador--;
        removeMusicaElefante();
        document.getElementById('contador').textContent = contador;
    }
}

function geraMusicaElefante(numVersos){
    let paragrafo = document.getElementById('paragrafoMusica');
    
    let verso;
    if (numVersos === 1) {
        verso = `${numVersos} elefante incomoda muita gente`
    } else if (numVersos % 2 === 1) {
        verso = `${numVersos} elefantes incomodam muita gente`;
    } else {
        let repeticoes = 'incomodam '.repeat(numVersos).trim();

        if (numVersos > 9) {
            repeticoes = 'incomodam '.repeat(8).trim() + '...';
        }
        verso = `${numVersos} elefantes ${repeticoes} muito mais`;
    }
    paragrafo.innerHTML += `\n${verso}`;

}

function removeMusicaElefante(){
    let paragrafo = document.getElementById('paragrafoMusica');
    let linhas = paragrafo.innerHTML.split('\n');
    if (linhas.length > 1) {
        linhas.pop();
        paragrafo.innerHTML = linhas.join('\n');
    }
}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = document.getElementById('lista-professores').getElementsByTagName('li');

    Array.from(itens).forEach(item => {
        let prof = item.textContent;
        item.style.display = prof.toLowerCase().indexOf(filtro) > -1 ? "" : "none";
    });
}
