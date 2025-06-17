document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById("nome");
  const mensagemArea = document.getElementById("mensagem");
  const form = document.querySelector("form");

  const saudacao = document.createElement("p");
  saudacao.style.color = "#4caf50";
  saudacao.style.fontWeight = "bold";
  nomeInput.parentElement.insertBefore(saudacao, nomeInput.nextSibling);

  nomeInput.addEventListener("input", function () {
    const nome = nomeInput.value.trim();
    saudacao.textContent = nome ? `Olá, ${nome}! 👋` : "";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = mensagemArea.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    const botao = form.querySelector('input[type="submit"]');
    botao.value = "Enviandooooo...";
    botao.disabled = true;

    setTimeout(() => {
      alert(`Mensagem de ${nome} simulada com sucesso!`);
      botao.value = "Enviar";
      botao.disabled = false;
      form.reset();
      saudacao.textContent = "";
    }, 1500);
  });
});
