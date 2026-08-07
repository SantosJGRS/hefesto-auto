/* ==========================================
   INTERATIVIDADE DA TELA DE CADASTRO
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade de Mostrar/Esconder Senha
    const inputSenha = document.querySelector(".input-box input[type='password']") || document.querySelector("input[type='password']");
    const iconeSenha = document.querySelector(".icone-senha");

    if (iconeSenha && inputSenha) {
        iconeSenha.addEventListener("click", () => {
            // Alterna o tipo do input entre 'password' e 'text'
            if (inputSenha.type === "password") {
                inputSenha.type = "text";
                iconeSenha.classList.remove("fa-eye");
                iconeSenha.classList.add("fa-eye-slash"); // Muda o ícone para o olho cortado
            } else {
                inputSenha.type = "password";
                iconeSenha.classList.remove("fa-eye-slash");
                iconeSenha.classList.add("fa-eye"); // Volta para o olho normal
            }
        });
    }

    // 2. Validação simples do formulário no envio
    const formCadastro = document.querySelector("form");

    if (formCadastro) {
        formCadastro.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede o recarregamento padrão da página

            const inputs = formCadastro.querySelectorAll("input");
            let formularioValido = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    formularioValido = false;
                    input.style.borderColor = "#fd1111"; // Destaca o input vazio em vermelho
                } else {
                    input.style.borderColor = "#333"; // Reseta a borda se estiver preenchido
                }
            });

            if (formularioValido) {
                alert("Cadastro realizado com sucesso! (Simulação)");
                // Aqui você pode adicionar o redirecionamento para o login, ex:
                // window.location.href = "login.html";
            } else {
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        });
    }
});