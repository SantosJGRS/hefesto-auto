/* ==========================================
   CONFIGURAÇÃO DA PÁGINA
========================================== */

const pageData = {

    logo: "../assets/logo.png",

    googleIcon:
        "../assets/google.png",

    tituloBoasVindas:
        "Bem-vindo",

    descricaoBoasVindas:
        "Faça login para acessar sua conta.",

    labelEmail:
        "E-mail",

    labelSenha:
        "Senha",

    placeholderEmail:
        "seuemail@exemplo.com",

    placeholderSenha:
        "Sua senha",

    textoRecuperacao:
        "Esqueceu a senha?",

    textoEntrar:
        "Entrar",

    textoSeparador:
        "ou continue com",

    googleTexto:
        "Continuar com Google",

    textoCadastro:
        "Não possui conta?",

    botaoCadastro:
        "Criar conta"

};

/* ==========================================
   ELEMENTOS
========================================== */

const logo =
    document.getElementById("logo");

const tituloBoasVindas =
    document.getElementById("tituloBoasVindas");

const descricaoBoasVindas =
    document.getElementById("descricaoBoasVindas");

const labelEmail =
    document.getElementById("labelEmail");

const labelSenha =
    document.getElementById("labelSenha");

const email =
    document.getElementById("email");

const senha =
    document.getElementById("senha");

const btnEntrar =
    document.getElementById("btnEntrar");

const btnGoogle =
    document.getElementById("btnGoogle");

const btnCriarConta =
    document.getElementById("btnCriarConta");

const btnRecuperarSenha =
    document.getElementById("btnRecuperarSenha");

const textoSeparador =
    document.getElementById("textoSeparador");

const googleTexto =
    document.getElementById("googleTexto");

const googleIcon =
    document.getElementById("googleIcon");

const textoCadastro =
    document.getElementById("textoCadastro");

const toggleSenha =
    document.getElementById("toggleSenha");

/* ==========================================
   PREENCHER CONTEÚDO
========================================== */

function preencherConteudo() {

    logo.src =
        pageData.logo;

    googleIcon.src =
        pageData.googleIcon;

    tituloBoasVindas.textContent =
        pageData.tituloBoasVindas;

    descricaoBoasVindas.textContent =
        pageData.descricaoBoasVindas;

    labelEmail.textContent =
        pageData.labelEmail;

    labelSenha.textContent =
        pageData.labelSenha;

    email.placeholder =
        pageData.placeholderEmail;

    senha.placeholder =
        pageData.placeholderSenha;

    btnRecuperarSenha.textContent =
        pageData.textoRecuperacao;

    btnEntrar.textContent =
        pageData.textoEntrar;

    textoSeparador.textContent =
        pageData.textoSeparador;

    googleTexto.textContent =
        pageData.googleTexto;

    textoCadastro.textContent =
        pageData.textoCadastro;

    btnCriarConta.textContent =
        pageData.botaoCadastro;
}

/* ==========================================
   MOSTRAR / OCULTAR SENHA
========================================== */

function alternarSenha() {

    const icon =
        toggleSenha.querySelector("i");

    if (senha.type === "password") {

        senha.type = "text";

        icon.classList.remove(
            "fa-eye"
        );

        icon.classList.add(
            "fa-eye-slash"
        );

    } else {

        senha.type = "password";

        icon.classList.remove(
            "fa-eye-slash"
        );

        icon.classList.add(
            "fa-eye"
        );

    }

}

/* ==========================================
   VALIDAR LOGIN
========================================== */

function validarLogin() {

    const emailValor =
        email.value.trim();

    const senhaValor =
        senha.value.trim();

    if (emailValor === "") {

        alert(
            "Informe seu e-mail."
        );

        email.focus();

        return false;
    }

    if (senhaValor === "") {

        alert(
            "Informe sua senha."
        );

        senha.focus();

        return false;
    }

    return true;
}

/* ==========================================
   LOGIN
========================================== */

function realizarLogin() {

    if (!validarLogin()) {
        return;
    }

    const dadosLogin = {

        email:
            email.value.trim(),

        senha:
            senha.value.trim()

    };

    console.log(
        "LOGIN:",
        dadosLogin
    );

    alert(
        "Login realizado com sucesso!"
    );
}

/* ==========================================
   GOOGLE
========================================== */

function loginGoogle() {

    console.log(
        "Login Google"
    );

    alert(
        "Continuar com Google"
    );
}

/* ==========================================
   CRIAR CONTA
========================================== */

function criarConta() {

    console.log(
        "Criar Conta"
    );

    alert(
        "Redirecionar para cadastro"
    );
}

/* ==========================================
   RECUPERAR SENHA
========================================== */

function recuperarSenha() {

    console.log(
        "Recuperar senha"
    );

    alert(
        "Redirecionar para recuperação de senha"
    );
}

/* ==========================================
   ENTER PARA LOGIN
========================================== */

function configurarEnter() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                realizarLogin();

            }

        }
    );
}

/* ==========================================
   EVENTOS
========================================== */

function configurarEventos() {

    btnEntrar.addEventListener(
        "click",
        realizarLogin
    );

    btnGoogle.addEventListener(
        "click",
        loginGoogle
    );

    btnCriarConta.addEventListener(
        "click",
        criarConta
    );

    btnRecuperarSenha.addEventListener(
        "click",
        recuperarSenha
    );

    toggleSenha.addEventListener(
        "click",
        alternarSenha
    );
}

/* ==========================================
   INIT
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        preencherConteudo();

        configurarEventos();

        configurarEnter();

    }
);