const trocar = () => {
    document.querySelector("#adjetivo").innerHTML = document.querySelector("input[name='meu_valor']").value;
}

window.onload = () => {
    document.querySelector("button[type='submit']").addEventListener('click', function(evento){ evento.preventDefault(); trocar(); });
}