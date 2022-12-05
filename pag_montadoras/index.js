window.onload = function(){

    mostra_montadoras();
}
const muda_cor = () =>{
    let cor = document.getElementById("color_background").value;
    document.getElementById("topo").style = ("width:auto; height:50px; background-color:"+cor);
}

const altera_quantidade = () =>{
    let quant = document.getElementById("quantidade").value;
    mostra_montadoras(quant)
}

const mostra_montadoras = (quant) =>{
    let selectMontadoras = document.getElementById("montadoras");
    selectMontadoras.innerHTML = ``;
    for (let i = 0; i < quant; i++) {
        selectMontadoras.innerHTML += `<option value="${i}">${montadoras[i]}</option>`
    }
}

const selecionar =() =>{
    let sel = document.getElementById("montadoras").value;
    document.getElementById("escolha").innerText = montadoras[sel]
}

const add_montadora =()=>{
    let mont = document.getElementById("nova_montadora").value;
    montadoras.push(mont)
    altera_quantidade();
}

const remove_montadora = () => {
    montadoras.pop();
    altera_quantidade();
}

let montadoras = ['Fiat', 'Ford', 'voskswagen'];
