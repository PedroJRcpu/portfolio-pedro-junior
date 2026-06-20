// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const resultado = document.getElementById("mensagemResultado");

  // Verifica se todos os campos foram preenchidos
  if (nome === "" || email === "" || mensagem === "") {
    resultado.textContent = "Por favor, preencha todos os campos.";
    resultado.style.color = "red";
    return;
  }

  // Verifica se o e-mail possui formato válido
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    resultado.textContent = "Digite um e-mail válido.";
    resultado.style.color = "red";
    return;
  }

  // Simulação de envio
  resultado.textContent = "Mensagem enviada com sucesso!";
  resultado.style.color = "green";

  // Limpa os campos do formulário
  document.getElementById("formContato").reset();
});

// Alternância entre tema claro e escuro
document.getElementById("botaoTema").addEventListener("click", function() {
  document.body.classList.toggle("tema-escuro");
});