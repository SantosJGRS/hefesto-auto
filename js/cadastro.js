/* ==========================================
   DADOS DA PÁGINA
========================================== */

const pageData = {

    logo:
        "assets",

    googleIcon:
        "../assets/google.png",

    tituloCadastro:
        "Criar conta",

    descricaoLinha1:
        "Leva menos de 1 minuto.",

    descricaoLinha2:
        "Crie seu perfil para começar.",

    tituloFormulario:
        "Seus dados",

    descricaoFormulario:
        "Preencha seus dados abaixo.",

    labelNome:
        "Nome",

    labelEmail:
        "E-mail",

    labelSenha:
        "Senha",

    labelConfirmarSenha:
        "Confirmar senha",

    placeholderNome:
        "Seu nome completo",

    placeholderEmail:
        "voce@exemplo.com",

    placeholderSenha:
        "Mínimo 8 caracteres",

    placeholderConfirmarSenha:
        "Repita a senha",

    textoBotaoCadastro:
        "Criar conta",

    textoSeparador:
        "ou continue com",

    googleTexto:
        "Continuar com Google",

    textoLogin:
        "Já possui conta?",

    textoBotaoEntrar:
        "Entrar",

    textoTermos1:
        "Ao criar uma conta, você concorda com nossos",

    textoTermos2:
        "e nossa",

    textoBotaoTermos:
        "Termos de Uso",

    textoBotaoPrivacidade:
        "Política de Privacidade"
};


/* ==========================================
   ELEMENTOS
========================================== */

const logo =
    document.getElementById("logo");

const googleIcon =
    document.getElementById("googleIcon");

const tituloCadastro =
    document.getElementById("tituloCadastro");

const descricaoLinha1 =
    document.getElementById("descricaoLinha1");

const descricaoLinha2 =
    document.getElementById("descricaoLinha2");

const tituloFormulario =
    document.getElementById("tituloFormulario");

const descricaoFormulario =
    document.getElementById("descricaoFormulario");

const labelNome =
    document.getElementById("labelNome");

const labelEmail =
    document.getElementById("labelEmail");

const labelSenha =
    document.getElementById("labelSenha");

const labelConfirmarSenha =
    document.getElementById("labelConfirmarSenha");

const nome =
    document.getElementById("nome");

const email =
    document.getElementById("email");

const senha =
    document.getElementById("senha");

const confirmarSenha =
    document.getElementById("confirmarSenha");

const btnCriarConta =
    document.getElementById("btnCriarConta");

const btnGoogle =
    document.getElementById("btnGoogle");

const btnEntrar =
    document.getElementById("btnEntrar");

const btnTermos =
    document.getElementById("btnTermos");

const btnPrivacidade =
    document.getElementById("btnPrivacidade");

const toggleSenha =
    document.getElementById("toggleSenha");

const toggleConfirmarSenha =
    document.getElementById("toggleConfirmarSenha");

const textoSeparador =
    document.getElementById("textoSeparador");

const googleTexto =
    document.getElementById("googleTexto");

const textoLogin =
    document.getElementById("textoLogin");

const textoTermos1 =
    document.getElementById("textoTermos1");

const textoTermos2 =
    document.getElementById("textoTermos2");


/* ==========================================
   PREENCHER CONTEÚDO
========================================== */

function preencherConteudo() {

    logo.src =
        pageData.logo;

    googleIcon.src =
        pageData.googleIcon;

    tituloCadastro.textContent =
        pageData.tituloCadastro;

    descricaoLinha1.textContent =
        pageData.descricaoLinha1;

    descricaoLinha2.textContent =
        pageData.descricaoLinha2;

    tituloFormulario.textContent =
        pageData.tituloFormulario;

    descricaoFormulario.textContent =
        pageData.descricaoFormulario;

    labelNome.textContent =
        pageData.labelNome;

    labelEmail.textContent =
        pageData.labelEmail;

    labelSenha.textContent =
        pageData.labelSenha;

    labelConfirmarSenha.textContent =
        pageData.labelConfirmarSenha;

    nome.placeholder =
        pageData.placeholderNome;

    email.placeholder =
        pageData.placeholderEmail;

    senha.placeholder =
        pageData.placeholderSenha;

    confirmarSenha.placeholder =
        pageData.placeholderConfirmarSenha;

    btnCriarConta.textContent =
        pageData.textoBotaoCadastro;

    textoSeparador.textContent =
        pageData.textoSeparador;

    googleTexto.textContent =
        pageData.googleTexto;

    textoLogin.textContent =
        pageData.textoLogin;

    btnEntrar.textContent =
        pageData.textoBotaoEntrar;

    textoTermos1.textContent =
        pageData.textoTermos1;

    textoTermos2.textContent =
        pageData.textoTermos2;

    btnTermos.textContent =
        pageData.textoBotaoTermos;

    btnPrivacidade.textContent =
        pageData.textoBotaoPrivacidade;
}


/* ==========================================
   MOSTRAR / OCULTAR SENHA
========================================== */

function alternarSenha(campo, botao) {

    const icon =
        botao.querySelector("i");

    if (campo.type === "password") {

        campo.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        campo.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


/* ==========================================
   VALIDAR EMAIL
========================================== */

function emailValido(emailTexto) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailTexto);
}


/* ==========================================
   VALIDAR FORMULÁRIO
========================================== */

function validarFormulario() {

    if (nome.value.trim() === "") {

        alert("Informe seu nome.");
        nome.focus();

        return false;
    }

    if (email.value.trim() === "") {

        alert("Informe seu e-mail.");
        email.focus();

        return false;
    }

    if (!emailValido(email.value.trim())) {

        alert("E-mail inválido.");
        email.focus();

        return false;
    }

    if (senha.value.length < 8) {

        alert(
            "A senha deve possuir no mínimo 8 caracteres."
        );

        senha.focus();

        return false;
    }

    if (confirmarSenha.value.trim() === "") {

        alert(
            "Confirme sua senha."
        );

        confirmarSenha.focus();

        return false;
    }

    if (
        senha.value !==
        confirmarSenha.value
    ) {

        alert(
            "As senhas não conferem."
        );

        confirmarSenha.focus();

        return false;
    }

    return true;
}


/* ==========================================
   CADASTRAR
========================================== */

function criarConta() {

    if (!validarFormulario()) {
        return;
    }

    const usuario = {

        nome:
            nome.value.trim(),

        email:
            email.value.trim(),

        senha:
            senha.value
    };

    console.log(
        "NOVO USUÁRIO",
        usuario
    );

    alert(
        "Conta criada com sucesso!"
    );
}


/* ==========================================
   GOOGLE
========================================== */

function continuarGoogle() {

    console.log(
        "Login Google"
    );

    alert(
        "Continuar com Google"
    );
}


/* ==========================================
   LOGIN
========================================== */

function abrirLogin() {

    console.log(
        "Abrir tela de login"
    );

    alert(
        "Redirecionar para login"
    );
}


/* ==========================================
   TERMOS
========================================== */

function abrirTermos() {

    console.log(
        "Abrir Termos de Uso"
    );
}

function abrirPrivacidade() {

    console.log(
        "Abrir Política de Privacidade"
    );
}


/* ==========================================
   ENTER
========================================== */

function configurarEnter() {

    document.addEventListener(
        "keydown",
        function(event){

            if(event.key === "Enter"){

                criarConta();
            }
        }
    );
}


/* ==========================================
   EVENTOS
========================================== */

function configurarEventos() {

    btnCriarConta.addEventListener(
        "click",
        criarConta
    );

    btnGoogle.addEventListener(
        "click",
        continuarGoogle
    );

    btnEntrar.addEventListener(
        "click",
        abrirLogin
    );

    btnTermos.addEventListener(
        "click",
        abrirTermos
    );

    btnPrivacidade.addEventListener(
        "click",
        abrirPrivacidade
    );

    toggleSenha.addEventListener(
        "click",
        () =>
            alternarSenha(
                senha,
                toggleSenha
            )
    );

    toggleConfirmarSenha.addEventListener(
        "click",
        () =>
            alternarSenha(
                confirmarSenha,
                toggleConfirmarSenha
            )
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