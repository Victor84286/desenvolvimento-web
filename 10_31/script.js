let minha_variavel = [1, 2, 3, 4, 'casa'];

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

window.onload = () => {
    console.log(imprime(minha_variavel));
    console.log(imprimeForEach(minha_variavel));
    console.log(imprimeForOf(minha_variavel));
}