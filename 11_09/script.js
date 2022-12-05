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


const incluiImagem = () =>{
    let result = nova_variavel.map((elemento, index) => {elemento.imagem = "imagens/number-" + (index+1) + ".png"; return elemento});
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

const criaCard = () => {
    incluiImagem(nova_variavel);
    let elemento;
    const minha_div = document.querySelector(".div");

    for(let i = 0; i<nova_variavel.length; i++){
        elemento = nova_variavel[i];
        minha_div.innerHTML += `
        <div class ='container'>
            <img src='${elemento.imagem}'>
            <br/>
            <h3>${elemento.nome}</h3>
            <p>${elemento.valor}</p>
            <p>${elemento.valor_real}</p>
        </div>`;
    }
}

window.onload = () => {
    criaCard();
}