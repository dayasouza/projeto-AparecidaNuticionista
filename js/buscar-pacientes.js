var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
  console.log("buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  if (xhr.status == 200) {
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;
      console.log(resposta);
      console.log(typeof resposta); //imprime no console o tipo do dado

      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionarPacienteNaTabela(paciente);
      });
      console.log(pacientes);
      console.log(typeof pacientes); //imprime no console o tipo do dado
    });
  } else {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }

  xhr.send();
});
