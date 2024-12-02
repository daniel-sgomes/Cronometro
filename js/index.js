function iniciarC() {
  document.getElementById("btp").innerHTML = "Iniciada";
  document.getElementById("bts").innerHTML = "Pausar Contagem";
  tempo = setInterval(function () {
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) + 1;

    document.getElementById("tempo").innerHTML = soma;

  }, 1000);
}

function pausarC() {
  clearInterval(tempo);

  document.getElementById("bts").innerHTML = "||";
  document.getElementById("btp").innerHTML = "Retomar";

}

function pararC() {
  clearInterval(tempo);

  document.getElementById("tempo").innerHTML = 0;
  document.getElementById("btp").innerHTML = "Iniciar Contagem";
  document.getElementById("bts").innerHTML = "Pausar Contagem";
}