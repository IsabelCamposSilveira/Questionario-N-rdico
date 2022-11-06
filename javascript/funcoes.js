const questionarioCompleto = [
    {
        questao: "O cavalo de Odin foi presente de quem?",
        a: "Freya",
        b: "Loki",
        c: "Sif",
        d: "Aegir",
        correto: "b",
    },
    {
        questao: "Por quantos dias Odin ficou pendurado na arvore Yggdrasil?",
        a: "5",
        b: "12",
        c: "9",
        d: "7",
        correto: "c",       
    },
    {
        questao: "Yggdrasil é considerada a árvode da:",
        a: "vida",
        b: "sabedoria",
        c: "beleza",
        d: "imortalidade",
        correto: "a",
    },
    {
        questao: "Qual o nome do clã da natureza e da fertilidade?",
        a: "Freyr",
        b: "Vidar",
        c: "Aesir",
        d: "Vanir",
        correto: "d",
    }
]

// constantes com os itens do questionario
const questionario = document.getElementById("questionario");
const perguntaTexto = document.getElementById("pergunta");
const alternativa = document.querySelectorAll(".alternativa");
const aTexto = document.getElementById("aTexto");
const bTexto = document.getElementById("bTexto");
const cTexto = document.getElementById("cTexto");
const dTexto = document.getElementById("dTexto");
const botao = document.getElementById("botao");
const abertura = document.getElementById("abertura");

// para defirir qual o questionario que sera perguntado
let numeroQuestionario = 0;
let pontos = 0;



//linkando as perguntas do js com o html
function carregaQuiz() {

    abertura.style.display = 'none';
    questionario.style.display = 'block';
    desmarca(); 
    const questionarioAtual = questionarioCompleto[numeroQuestionario];

    perguntaTexto.innerText = questionarioAtual.questao;
    aTexto.innerText = questionarioAtual.a;
    bTexto.innerText = questionarioAtual.b;
    cTexto.innerText = questionarioAtual.c;
    dTexto.innerText = questionarioAtual.d;
}

//questionario.innerHTML = `<h1>Questionário Nórtico</h1> <p>Você está pronto para responder?</p> <button onclick="carregaQuiz()">Começar</button>`;

//carregaQuiz();

//Conferir se alguma alternativa esta marcada
function selecionado() {
    let marcada = undefined;

    alternativa.forEach((alternativa) => {
        if (alternativa.checked) {
            marcada = alternativa.id;
        }
    })
    return marcada;
}

//descelecionar as alternativas 
function desmarca() {
    alternativa.forEach((alternativa) =>
    alternativa.checked = false);
}

//Fazendo o botao funcionar para passar para a próxima questão
botao.addEventListener("click",() => {

    const marcada = selecionado();  
    if(marcada){
        if(marcada == questionarioCompleto[numeroQuestionario].correto){
            pontos ++;
        }
        numeroQuestionario++;

        //Para passar para o próximo questionario enquanto tiver algum e depois mostrar a tela de finalização
        if(questionarioCompleto.length > numeroQuestionario){
            carregaQuiz();
        } else {
            questionario.innerHTML = `<h2>Acabou!</h2> <p>Você acertou ${pontos} de ${questionarioCompleto.length}.</p>
            <button onclick="location.reload()">Refazer</button>`;
        }
    }
});
