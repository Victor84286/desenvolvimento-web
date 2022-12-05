let minha_variavel = [1, 2, 3, 4, 'casa'];
const nova_variavel = [
    {
        nome: "um",
        valor: 1,
        valor_real: 1.0,
    },
    {
        nome: "dois",
        valor:2,
        valor_real: 2.0,
    },
    {
        nome: "tres",
        valor: 3,
        valor_real: 3.0,
    },
];

const imprime = (entrada) => {
    let saida = "";
    for(let i = 0; i < entrada.length; i++){
        saida += entrada[i];
        if (i < entrada.length-1){
            saida += "-";
        }
    }

    return saida + ".";
}

const imprimeForEach = (entrada) => {
    let saida = "";
    entrada.forEach((elemento, index) => {
        saida += elemento
        if (index < entrada.length-1) saida += "-";
    });
    return saida +".";
}

const imprimeForOf = (entrada) => {
    let saida = "";
    let count = 0;
    for (const elemento of entrada){
        (count < entrada.length - 1)? saida += elemento + "-": saida += elemento + ".";
        count++;
    }
    return saida;
}

const incluiImagem = () =>{
    let result = nova_variavel.map((elemento, index) => {elemento.imagem = "imagens/number_" + (index+1) + ".png"; return elemento});
    comImagem = result;
    return comImagem;
}

const filtraLista = (lista, pesquisa) => {
    let nome_limpo;
    let deve_entrar;

    const nova_lista = lista.filter( (elemento) => {
        nome_limpo = elemento.nome.toLowerCase();
        deve_entrar = nome_limpo.includes(pesquisa.toLowerCase());
        return deve_entrar;
    })

    return nova_lista;
}

window.onload = () => {
    incluiImagem();
    document.querySelector("#div").appendChild(document.createTextNode("Nada"));
}