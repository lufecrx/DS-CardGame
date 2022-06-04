//variáveis globais, usadas no decorrer do código
var cardCPU;
var cardPlayer;
const frenteDaCarta = sorteioDoFront();
const elementResult = document.querySelector("#resultado");
const elementGameOver = document.querySelector("#gameover");
var cont = 0;
var contB = 0;
gameOver = false;


//Array com as cartas do jogo
const cartas = [
    carta = {
        imagem: "https://images2.imgbox.com/c1/0b/JJ9NCKPJ_o.jpg",
        nome: "Gwin, Lord Of Cinder",
        atributos: {
            Ataque: 7,
            Velocidade: 7,
            Defesa: 6,
            Magia: 5,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/e3/8a/mxM07tCf_o.jpg",
        nome: "The Nameless King",
        atributos: {
            Ataque: 7,
            Velocidade: 6,
            Defesa: 4,
            Magia: 7,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/4f/dd/wjxG9QtZ_o.jpg",
        nome: "Pontiff Sulyvahn",
        atributos: {
            Ataque: 7,
            Velocidade: 6,
            Defesa: 5,
            Magia: 8,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/cc/d3/rMO4Idi5_o.jpg",
        nome: "Artorias the Abysswalker",
        atributos: {
            Ataque: 7,
            Velocidade: 7,
            Defesa: 5,
            Magia: 5,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/16/b9/PIxBFsT1_o.jpg",
        nome: "Sif, the Great Grey Wolf",
        atributos: {
            Ataque: 7,
            Velocidade: 7,
            Defesa: 2,
            Magia: 2,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/3e/19/Z01oBard_o.jpg",
        nome: "Capra Demon",
        atributos: {
            Ataque: 6,
            Velocidade: 5,
            Defesa: 1,
            Magia: 2,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/d2/61/VQupys2U_o.jpg",
        nome: "Tauros Demon",
        atributos: {
            Ataque: 5,
            Velocidade: 6,
            Defesa: 4,
            Magia: 4,
        }
    },

    carta = {
        imagem: "https://images2.imgbox.com/37/84/PPliyxZ5_o.jpg",
        nome: "Solaire",
        atributos: {
            Ataque: 7,
            Velocidade: 7,
            Defesa: 7,
            Magia: 7,
        }
    },


];

//Exibir parte frontal das cartas 
frenteJogador = document.querySelector("#cardPlayer-front");
frenteJogador.innerHTML = sorteioDoFront();
frenteCPU = document.querySelector("#cardCPU-front");
frenteCPU.innerHTML = sorteioDoFront();

//Exibir placar do jogo
exibirPlacar(cartas.length);

//Sorteio de uma imagem aleatória para a frente da carta
function sorteioDoFront() {
    //Array com URL's das imagens
    var fundo = [
        'https://loginportal.funnyjunk.com/pictures/Tarot+cards_6ebb5e_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_d7f5b6_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_3ffbd9_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_be88de_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_65af21_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_7a6254_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_4276a4_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_ebabfa_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_5442e6_6232489.jpg',
        'https://loginportal.funnyjunk.com/pictures/Tarot_b1fd94_6232489.jpg'
    ]

    //Pegar número aleatório da imagem
    var numFundo = parseInt(Math.random() * fundo.length);

    mostrarVerso = `<img src="${fundo[numFundo]}" style=" width: inherit; height: inherit;">`;
    return mostrarVerso;
}


//Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}


//Sorteio das cartas que vão ser adversárias, entre outras coisas
function sortearCarta() {
    //Limpar a seção resultado
    elementResult.innerHTML = "";

    if (contB == 0) {
        // embaralhar cartas e dividi-las entre o player e a máquina
        shuffleArray(cartas);
        cartaJogador = cartas.splice(1, 4);
        cartaMaquina = cartas.splice(0, 4);
        contB++;
    }

    //sortear as cartas que vão ser adversárias
    let numPlayer = parseInt(Math.random() * cartaJogador.length);
    let numCPU = parseInt(Math.random() * cartaMaquina.length);
    cardPlayer = cartaJogador[numPlayer];
    cardCPU = cartaMaquina[numCPU];
    //desativar e ativar os botões específicos 
    document.querySelector("#btnSortear").disabled = true;
    document.querySelector("#btnJogar").disabled = false;

    //css
    if (cont != 0) {
        document.querySelector("#carta-maquina").style.transform = "rotateY(0deg)";
        document.querySelector("#carta-jogador").style.transform = "rotateY(-180deg)";
        document.querySelector("#carta-jogador").style.transform = "transform 0.9s";
    } else {
        document.querySelector("#carta-jogador").style.transform = "rotateY(180deg)";
    }
    //comandos finais
    cont++;
    showCard(cardPlayer);
    exibirPlacar();
}


//Mostrar os atributos
function showAttributes(choiceAttributes) {
    let optionsText = "";

    var choice = choiceAttributes;

    if (choice == cardPlayer) {
        for (let atributo in choiceAttributes.atributos) {
            optionsText += `<input type='radio' name='attributes' value="${atributo}">${atributo}: ${cardPlayer.atributos[atributo]}<br>`;
        }
    }

    if (choice == cardCPU) {

        for (let atributo in choiceAttributes.atributos) {
            optionsText += `<p type="text" name="${atributo}">${atributo}: ${cardCPU.atributos[atributo]}</p>`
        }
    }

    return optionsText;

}


//Mostrar as cartas do jogador e da máquina
function showCard(cardSelected) {
    const playerImgCard = document.querySelector("#verso-carta-jogador");
    const cpuImgCard = document.querySelector("#verso-carta-maquina");
    const moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var showCard = cardSelected;


    if (showCard == cardPlayer) {
        playerImgCard.style.backgroundImage = `url(${showCard.imagem})`;
        var elementImg = `${moldura}
    <p class="carta-subtitle">${cardPlayer.nome}</p>
    <figcaption id="opcoes" class="carta-status">
    ${showAttributes(cardPlayer)}
    </figcaption>`;

        playerImgCard.innerHTML = elementImg;
    }

    if (showCard == cardCPU) {
        cpuImgCard.style.backgroundImage = `url(${showCard.imagem})`;
        var elementImg = `${moldura}
    <p class="carta-subtitle">${cardCPU.nome}</p>
    <figcaption id="opcoes" class="carta-status">
    ${showAttributes(cardCPU)}
    </figcaption>`;

        cpuImgCard.innerHTML = elementImg;
    }

}


//Pegar os atributos
function selectedAttribute() {
    let radioAttributes = document.querySelectorAll('[name="attributes"]');

    for (var i = 0; i < radioAttributes.length; i++) {
        if (radioAttributes[i].checked == true) {
            let selected = radioAttributes[i].value;
            return selected;
        }
    }
}


//Começar o combate entre a carta do jogador e da CPU
function jogar() {
    let selected = selectedAttribute();

    // Caso o player não escolha nenhum atributo, um aviso vai aparecer
    if (selected == undefined) {
        alert("Você não escolheu nenhum atributo");
    } else {
        var valueCardPlayer = cardPlayer.atributos[selected];
        var valueCardCPU = cardCPU.atributos[selected]

        // Player ganha, a carta da máquina é removida de suas mãos e dada ao jogador
        if (valueCardPlayer > valueCardCPU) {
            resultado =
                `<p class= "resultado-final">Você derrotou o ${cardCPU.nome}!</p>
                 <button type="button" onclick="continuar()">Continuar</button>`;
            let pos = cartaMaquina.indexOf(cardCPU);
            let removedCard = cartaMaquina.splice(pos, 1);
            for (let i = 0; i < removedCard.length; i++) {
                cartaJogador.push(removedCard[i]);
            }
            // Empate, nada acontece, o jogo segue
        } else if (valueCardPlayer == valueCardCPU) {
            resultado =
                `<p class= "resultado-final">Você empatou com o ${cardCPU.nome}!</p>
                 <button type="button" onclick="continuar()">Continuar</button>`;
            // Máquina ganha, a carta do jogador é removida de suas mãos e dada ao CPU
        } else {
            resultado =
                `<p class= "resultado-final">Você perdeu para o ${cardCPU.nome}!</p>
                 <button type="button" onclick="continuar()">Continuar</button>`;
            let pos = cartaJogador.indexOf(cardPlayer);
            let removedCard = cartaJogador.splice(pos, 1);
            for (let i = 0; i < removedCard.length; i++) {
                cartaMaquina.push(removedCard[i]);
            }
        }

        document.querySelector("#btnJogar").disabled = true;
        document.querySelector("#btnSortear").disabled = true;
        elementResult.innerHTML = resultado;
        showCard(cardCPU);

        document.querySelector("#carta-maquina").style.transform = "rotateY(180deg)";
    }

    exibirPlacar();

}


//Exibir quantidade de cartas que cada jogador possui 
function exibirPlacar() {
    const elementPlacar = document.querySelector("#placar");

    //Esse bloco vai ser executado somente uma vez
    if (contB == 0) {
        elementPlacar.innerHTML = `
        <tr>
          <td>
            <div id="pJogador"></div>
          </td>
          <td>Quantidade de cartas no baralho: ${cartas.length}</td>
          <td>
            <div id="pMaquina"></div>
          </td>
        </tr>`
    } else {
        const placar = [cartaJogador.length, cartaMaquina.length];


        // Condições ativadas quando um dos jogadores zerar as cartas em mãos
        if (placar[0] == 0) {
            document.querySelector("#btnSortear").disabled = true;
            document.querySelector("#btnJogar").disabled = true;
            elementResult.innerHTML = "";
            document.querySelector("#carta-jogador").style.transform = "rotateY(0deg)";
            document.querySelector("#carta-maquina").style.transform = "rotateY(0deg)";
            pcWin();
        }

        if (placar[1] == 0) {
            document.querySelector("#btnSortear").disabled = true;
            document.querySelector("#btnJogar").disabled = true;
            elementResult.innerHTML = "";
            document.querySelector("#carta-jogador").style.transform = "rotateY(0deg)";
            document.querySelector("#carta-maquina").style.transform = "rotateY(0deg)";
            playerWin();
        }

        // Placar do jogo
        elementPlacar.innerHTML = `
    <tr>
      <td>
        <div id="pJogador">Jogador:  ${placar[0]}</div>
      </td>
      <td>X</td>
      <td>
        <div id="pMaquina">Computador:  ${placar[1]}</div>
      </td>
    </tr>`
    }
}

// Se a máquina ganhar
function pcWin() {
    gameOver = true;
    elementGameOver.innerHTML = "VOCÊ MORREU";
    document.querySelector("#gameover-screen").style.visibility = "visible";
    document.querySelector("#gameover-screen").style.opacity = 1;
}

// Se o jogador ganhar
function playerWin() {
    gameOver = true;
    elementGameOver.innerHTML = "VOCÊ GANHOU";
    document.querySelector("#gameover-screen").style.visibility = "visible";
    document.querySelector("#gameover-screen").style.opacity = 1;
}

function continuar() {
    document.querySelector("#carta-jogador").style.transform = "rotateY(0deg)";
    document.querySelector("#btnSortear").disabled = false;
    elementResult.innerHTML = "";
    exibirPlacar();
}

// Recomeçar o jogo recarregando a página (Queria conseguir fazer isso de um jeito "mais bonito")
function replay() {
    window.location.reload();
}

document.querySelector("#replay").addEventListener("click", function () {
    replay();
});