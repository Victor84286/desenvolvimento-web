
const meu_vetor = ['primeiro elemento', 21];

console.log('meu_vetor.length', meu_vetor.length, meu_vetor);

let outro_vetor = new Array();
console.log('outro_vetor.length', outro_vetor.length);
const func_while = (limite) =>{
    let x = 0;
    while (x < limite){
        outro_vetor[x] = x;
        x+=1;
    }
}
function func_for()

func_while(10);
console.log('outro_vetor.length', outro_vetor.length);


















function aviso(){
    alert("Eu avisei!");
}

const muda_texto = ( ) => {
    let texto = document.getElementById("meu_texto").value;
    document.getElementById("primeiro_span").innerHTML = texto;
}

window.onload =function(){   
    document.querySelector("ol > li:nth-child(1)").addEventListener('mouseover', aviso); document.querySelector("ol > li:nth-child(1)").addEventListener('mouseover', aviso); 

    const botao = document.createElement('input');
    botao.type = 'button';
    botao.value = 'Testar';
    document.getElementById('inputs').appendChild(botao);
}
