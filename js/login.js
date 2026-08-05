
/* ==========================================
   CONFIGURAÇÕES
========================================== */

const API_URL = "http://localhost:3000";


/* ==========================================
   ELEMENTOS
========================================== */

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const lembrar = document.getElementById("lembrar");

const toggleSenha = document.getElementById("toggleSenha");

const btnEsqueciSenha =
    document.getElementById("btnEsqueciSenha");

const btnEntrar =
    document.getElementById("btnEntrar");

const btnGoogle =
    document.getElementById("btnGoogle");

const btnCriarConta =
    document.getElementById("btnCriarConta");

const btnPrivacidade =
    document.getElementById("btnPrivacidade");

const btnTermos =
    document.getElementById("btnTermos");

const btnSuporte =
    document.getElementById("btnSuporte");


/* ==========================================
   VALIDAR E-MAIL
========================================== */

function emailValido(emailTexto) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailTexto);
}


/* ==========================================
   MOSTRAR / OCULTAR SENHA
========================================== */

function alternarSenha() {

    const icon =
        toggleSenha.querySelector("i");


    if (senha.type === "password") {

        senha.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

        toggleSenha.setAttribute(
            "aria-label",
            "Ocultar senha"
        );

    } else {

        senha.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

        toggleSenha.setAttribute(
            "aria-label",
            "Mostrar senha"
        );
    }
}


/* ==========================================
   VALIDAR FORMULÁRIO
========================================== */

function validarFormulario() {

    const emailValor =
        email.value.trim();

    const senhaValor =
        senha.value;


    /* E-MAIL VAZIO */

    if (emailValor === "") {

        alert("Informe seu e-mail.");

        email.focus();

        return false;
    }


    /* E-MAIL INVÁLIDO */

    if (!emailValido(emailValor)) {

        alert("Informe um e-mail válido.");

        email.focus();

        return false;
    }


    /* SENHA VAZIA */

    if (senhaValor === "") {

        alert("Informe sua senha.");

        senha.focus();

        return false;
    }


    /* SENHA MUITO CURTA */

    if (senhaValor.length < 8) {

        alert(
            "A senha deve possuir no mínimo 8 caracteres."
        );

        senha.focus();

        return false;
    }


    return true;
}


/* ==========================================
   SALVAR LOGIN
========================================== */

function salvarLogin() {

    const emailValor =
        email.value.trim();


    if (lembrar.checked) {

        localStorage.setItem(
            "emailLogin",
            emailValor
        );

    } else {

        localStorage.removeItem(
            "emailLogin"
        );
    }
}


/* ==========================================
   CARREGAR LOGIN SALVO
========================================== */

function carregarLoginSalvo() {

    const emailSalvo =
        localStorage.getItem("emailLogin");


    if (emailSalvo) {

        email.value =
            emailSalvo;

        lembrar.checked =
            true;
    }
}


/* ==========================================
   REALIZAR LOGIN
========================================== */

async function realizarLogin(event) {

    event.preventDefault();


    /* ======================================
       VALIDAR
    ====================================== */

    if (!validarFormulario()) {
        return;
    }


    /* ======================================
       DADOS DO LOGIN
    ====================================== */

    const dadosLogin = {

        email:
            email.value.trim(),

        senha:
            senha.value

    };


    /* ======================================
       DESABILITAR BOTÃO
    ====================================== */

    btnEntrar.disabled = true;

    btnEntrar.textContent =
        "Entrando...";


    try {

        /* ==================================
           ENVIAR PARA O BACKEND
        ================================== */

        const resposta =
            await fetch(
                `${API_URL}/clientes/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            dadosLogin
                        )
                }
            );


        /* ==================================
           LER RESPOSTA
        ================================== */

        let dados = {};

        try {

            dados =
                await resposta.json();

        } catch {

            dados = {};
        }


        /* ==================================
           VERIFICAR ERRO
        ================================== */

        if (!resposta.ok) {

            throw new Error(

                dados.mensagem ||

                dados.message ||

                "E-mail ou senha incorretos."
            );
        }


        /* ==================================
           SALVAR E-MAIL
        ================================== */

        salvarLogin();


        /* ==================================
           SALVAR CLIENTE
        ================================== */

        if (dados.cliente) {

            localStorage.setItem(
                "cliente",
                JSON.stringify(
                    dados.cliente
                )
            );
        }


        /* ==================================
           SALVAR USUÁRIO
        ================================== */

        if (dados.usuario) {

            localStorage.setItem(
                "usuario",
                JSON.stringify(
                    dados.usuario
                )
            );
        }


        /* ==================================
           SALVAR TOKEN
        ================================== */

        if (dados.token) {

            localStorage.setItem(
                "token",
                dados.token
            );
        }


        /* ==================================
           SUCESSO
        ================================== */

        alert(
            "Login realizado com sucesso!"
        );


        /* ==================================
           REDIRECIONAR
        ================================== */

        window.location.href =
            "../index.html";


    } catch (erro) {

        console.error(
            "Erro ao realizar login:",
            erro
        );


        /* ==================================
           ERRO DE CONEXÃO
        ================================== */

        if (
            erro instanceof TypeError
        ) {

            alert(
                "Não foi possível conectar ao servidor. Verifique se o backend está funcionando."
            );

        } else {

            alert(
                erro.message ||
                "Não foi possível realizar o login."
            );
        }

    } finally {

        /* ==================================
           RESTAURAR BOTÃO
        ================================== */

        btnEntrar.disabled = false;

        btnEntrar.textContent =
            "Entrar";
    }
}


/* ==========================================
   ESQUECI A SENHA
========================================== */

function esqueciSenha() {

    const emailValor =
        email.value.trim();


    if (emailValor === "") {

        alert(
            "Informe seu e-mail primeiro para recuperar sua senha."
        );

        email.focus();

        return;
    }


    if (!emailValido(emailValor)) {

        alert(
            "Informe um e-mail válido."
        );

        email.focus();

        return;
    }


    console.log(
        "Solicitação de recuperação:",
        emailValor
    );


    alert(
        "A recuperação de senha será configurada em breve."
    );
}


/* ==========================================
   LOGIN COM GOOGLE
========================================== */

function continuarGoogle() {

    console.log(
        "Login com Google"
    );

    alert(
        "Login com Google ainda não configurado."
    );
}


/* ==========================================
   CRIAR CONTA
========================================== */

function abrirCadastro() {

    window.location.href =
        "cadastro.html";
}


/* ==========================================
   PRIVACIDADE
========================================== */

function abrirPrivacidade() {

    console.log(
        "Abrir Política de Privacidade"
    );

    alert(
        "Página de Política de Privacidade."
    );
}


/* ==========================================
   TERMOS
========================================== */

function abrirTermos() {

    console.log(
        "Abrir Termos de Uso"
    );

    alert(
        "Página de Termos de Uso."
    );
}


/* ==========================================
   SUPORTE
========================================== */

function abrirSuporte() {

    console.log(
        "Abrir Suporte"
    );

    alert(
        "Página de Suporte."
    );
}


/* ==========================================
   CONFIGURAR EVENTOS
========================================== */

function configurarEventos() {

    /* FORMULÁRIO */

    loginForm.addEventListener(
        "submit",
        realizarLogin
    );


    /* MOSTRAR SENHA */

    toggleSenha.addEventListener(
        "click",
        alternarSenha
    );


    /* ESQUECI A SENHA */

    btnEsqueciSenha.addEventListener(
        "click",
        esqueciSenha
    );


    /* GOOGLE */

    btnGoogle.addEventListener(
        "click",
        continuarGoogle
    );


    /* CRIAR CONTA */

    btnCriarConta.addEventListener(
        "click",
        abrirCadastro
    );


    /* PRIVACIDADE */

    btnPrivacidade.addEventListener(
        "click",
        abrirPrivacidade
    );


    /* TERMOS */

    btnTermos.addEventListener(
        "click",
        abrirTermos
    );


    /* SUPORTE */

    btnSuporte.addEventListener(
        "click",
        abrirSuporte
    );
}


/* ==========================================
   ENTER
========================================== */

function configurarEnter() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key !== "Enter") {
                return;
            }


            /*
             * Se o usuário estiver digitando
             * e pressionar Enter, envia o formulário.
             */

            if (
                document.activeElement === email ||
                document.activeElement === senha
            ) {

                event.preventDefault();

                loginForm.requestSubmit();
            }
        }
    );
}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        carregarLoginSalvo();

        configurarEventos();

        configurarEnter();

    }
);

