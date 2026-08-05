
/* ==========================================
   DADOS DA PÁGINA
========================================== */

const pageData = {

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

    labelCpf:
        "CPF",

    labelTelefone:
        "Telefone",

    labelDataNascimento:
        "Data de nascimento",

    labelEmail:
        "E-mail",

    labelSenha:
        "Senha",

    labelConfirmarSenha:
        "Confirmar senha",

    placeholderNome:
        "Seu nome completo",

    placeholderCpf:
        "000.000.000-00",

    placeholderTelefone:
        "(00) 00000-0000",

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

const labelCpf =
    document.getElementById("labelCpf");

const labelTelefone =
    document.getElementById("labelTelefone");

const labelDataNascimento =
    document.getElementById("labelDataNascimento");

const labelEmail =
    document.getElementById("labelEmail");

const labelSenha =
    document.getElementById("labelSenha");

const labelConfirmarSenha =
    document.getElementById("labelConfirmarSenha");

const nome =
    document.getElementById("nome");

const cpf =
    document.getElementById("cpf");

const telefone =
    document.getElementById("telefone");

const dataNascimento =
    document.getElementById("dataNascimento");

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

    labelCpf.textContent =
        pageData.labelCpf;

    labelTelefone.textContent =
        pageData.labelTelefone;

    labelDataNascimento.textContent =
        pageData.labelDataNascimento;

    labelEmail.textContent =
        pageData.labelEmail;

    labelSenha.textContent =
        pageData.labelSenha;

    labelConfirmarSenha.textContent =
        pageData.labelConfirmarSenha;

    nome.placeholder =
        pageData.placeholderNome;

    cpf.placeholder =
        pageData.placeholderCpf;

    telefone.placeholder =
        pageData.placeholderTelefone;

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
   MÁSCARA CPF
========================================== */

function aplicarMascaraCPF() {

    let valor =
        cpf.value.replace(/\D/g, "");

    if (valor.length > 11) {

        valor =
            valor.substring(0, 11);
    }

    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

    valor =
        valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

    cpf.value =
        valor;
}


/* ==========================================
   MÁSCARA TELEFONE
========================================== */

function aplicarMascaraTelefone() {

    let valor =
        telefone.value.replace(/\D/g, "");

    if (valor.length > 11) {

        valor =
            valor.substring(0, 11);
    }

    if (valor.length <= 10) {

        valor =
            valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

        valor =
            valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

    } else {

        valor =
            valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

        valor =
            valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );
    }

    telefone.value =
        valor;
}


/* ==========================================
   LIMPAR CPF
========================================== */

function limparCPF(valor) {

    return valor.replace(
        /\D/g,
        ""
    );
}


/* ==========================================
   LIMPAR TELEFONE
========================================== */

function limparTelefone(valor) {

    return valor.replace(
        /\D/g,
        ""
    );
}


/* ==========================================
   VALIDAR CPF
========================================== */

function cpfValido(cpfTexto) {

    const cpfLimpo =
        limparCPF(cpfTexto);


    if (
        cpfLimpo.length !== 11
    ) {

        return false;
    }


    /* CPFs com todos os números iguais */

    if (
        /^(\d)\1{10}$/.test(cpfLimpo)
    ) {

        return false;
    }


    /* Primeiro dígito */

    let soma = 0;

    for (
        let i = 0;
        i < 9;
        i++
    ) {

        soma +=
            Number(cpfLimpo[i]) *
            (10 - i);
    }

    let resto =
        (soma * 10) % 11;

    if (resto === 10) {

        resto = 0;
    }

    if (
        resto !==
        Number(cpfLimpo[9])
    ) {

        return false;
    }


    /* Segundo dígito */

    soma = 0;

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        soma +=
            Number(cpfLimpo[i]) *
            (11 - i);
    }

    resto =
        (soma * 10) % 11;

    if (resto === 10) {

        resto = 0;
    }


    return (
        resto ===
        Number(cpfLimpo[10])
    );
}


/* ==========================================
   VALIDAR EMAIL
========================================== */

function emailValido(emailTexto) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(
        emailTexto
    );
}


/* ==========================================
   VALIDAR DATA
========================================== */

function dataNascimentoValida(data) {

    if (!data) {

        return false;
    }

    const dataInformada =
        new Date(
            data + "T00:00:00"
        );

    const hoje =
        new Date();

    if (
        dataInformada >
        hoje
    ) {

        return false;
    }


    /* Verificar idade mínima de 13 anos */

    const limite =
        new Date();

    limite.setFullYear(
        limite.getFullYear() - 13
    );

    if (
        dataInformada >
        limite
    ) {

        return false;
    }


    return true;
}


/* ==========================================
   VALIDAR FORMULÁRIO
========================================== */

function validarFormulario() {

    const nomeValor =
        nome.value.trim();

    const cpfValor =
        cpf.value.trim();

    const telefoneValor =
        telefone.value.trim();

    const dataValor =
        dataNascimento.value;

    const emailValor =
        email.value.trim();

    const senhaValor =
        senha.value;

    const confirmarSenhaValor =
        confirmarSenha.value;


    /* NOME */

    if (
        nomeValor === ""
    ) {

        alert(
            "Informe seu nome."
        );

        nome.focus();

        return false;
    }


    if (
        nomeValor.length < 3
    ) {

        alert(
            "Informe seu nome completo."
        );

        nome.focus();

        return false;
    }


    /* CPF */

    if (
        cpfValor === ""
    ) {

        alert(
            "Informe seu CPF."
        );

        cpf.focus();

        return false;
    }


    if (
        !cpfValido(cpfValor)
    ) {

        alert(
            "Informe um CPF válido."
        );

        cpf.focus();

        return false;
    }


    /* TELEFONE */

    if (
        telefoneValor === ""
    ) {

        alert(
            "Informe seu telefone."
        );

        telefone.focus();

        return false;
    }


    const telefoneLimpo =
        limparTelefone(
            telefoneValor
        );


    if (
        telefoneLimpo.length < 10
    ) {

        alert(
            "Informe um telefone válido."
        );

        telefone.focus();

        return false;
    }


    /* DATA DE NASCIMENTO */

    if (
        dataValor === ""
    ) {

        alert(
            "Informe sua data de nascimento."
        );

        dataNascimento.focus();

        return false;
    }


    if (
        !dataNascimentoValida(
            dataValor
        )
    ) {

        alert(
            "Informe uma data de nascimento válida."
        );

        dataNascimento.focus();

        return false;
    }


    /* EMAIL */

    if (
        emailValor === ""
    ) {

        alert(
            "Informe seu e-mail."
        );

        email.focus();

        return false;
    }


    if (
        !emailValido(
            emailValor
        )
    ) {

        alert(
            "Informe um e-mail válido."
        );

        email.focus();

        return false;
    }


    /* SENHA */

    if (
        senhaValor === ""
    ) {

        alert(
            "Informe uma senha."
        );

        senha.focus();

        return false;
    }


    if (
        senhaValor.length < 8
    ) {

        alert(
            "A senha deve possuir no mínimo 8 caracteres."
        );

        senha.focus();

        return false;
    }


    /* CONFIRMAR SENHA */

    if (
        confirmarSenhaValor === ""
    ) {

        alert(
            "Confirme sua senha."
        );

        confirmarSenha.focus();

        return false;
    }


    if (
        senhaValor !==
        confirmarSenhaValor
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

async function criarConta() {

    /* ======================================
       VALIDAR FORMULÁRIO
    ====================================== */

    if (
        !validarFormulario()
    ) {

        return;
    }


    /* ======================================
       PREPARAR DADOS
    ====================================== */

    const usuario = {

        nome:
            nome.value.trim(),

        cpf:
            limparCPF(
                cpf.value
            ),

        telefone:
            limparTelefone(
                telefone.value
            ),

        email:
            email.value.trim(),

        senha:
            senha.value,

        data_nascimento:
            dataNascimento.value,

            Loja_idLoja:1
    };


    console.log(
        "Dados enviados:",
        usuario
    );


    /* ======================================
       DESABILITAR BOTÃO
    ====================================== */

    btnCriarConta.disabled =
        true;

    btnCriarConta.textContent =
        "Criando conta...";


    try {

        /* ==================================
           ENVIAR PARA API
        ================================== */

        const resposta =
            await fetch(
                "http://localhost:3000/clientes",
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            usuario
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
           VERIFICAR RESPOSTA
        ================================== */

        if (
            !resposta.ok
        ) {

            throw new Error(

                dados.mensagem ||

                dados.message ||

                "Não foi possível realizar o cadastro."
            );
        }


        /* ==================================
           SUCESSO
        ================================== */

        console.log(
            "Cliente cadastrado:",
            dados
        );


        alert(
            "Conta criada com sucesso!"
        );


        /* ==================================
           LIMPAR FORMULÁRIO
        ================================== */

        nome.value = "";

        cpf.value = "";

        telefone.value = "";

        dataNascimento.value = "";

        email.value = "";

        senha.value = "";

        confirmarSenha.value = "";


        /* ==================================
           IR PARA LOGIN
        ================================== */

        window.location.href =
            "../pages/login.html";


    } catch (erro) {

        console.error(
            "Erro no cadastro:",
            erro
        );


        /* ==================================
           ERRO DE CONEXÃO
        ================================== */

        if (
            erro instanceof
            TypeError
        ) {

            alert(
                "Não foi possível conectar ao servidor. Verifique se o backend está funcionando."
            );

        } else {

            alert(
                erro.message ||
                "Ocorreu um erro ao criar a conta."
            );
        }

    } finally {

        /* ==================================
           REATIVAR BOTÃO
        ================================== */

        btnCriarConta.disabled =
            false;

        btnCriarConta.textContent =
            pageData.textoBotaoCadastro;
    }
}


/* ==========================================
   MOSTRAR / OCULTAR SENHA
========================================== */

function alternarSenha(
    campo,
    botao
) {

    const icon =
        botao.querySelector("i");


    if (
        campo.type ===
        "password"
    ) {

        campo.type =
            "text";

        icon.classList.remove(
            "fa-eye"
        );

        icon.classList.add(
            "fa-eye-slash"
        );

    } else {

        campo.type =
            "password";

        icon.classList.remove(
            "fa-eye-slash"
        );

        icon.classList.add(
            "fa-eye"
        );
    }
}


/* ==========================================
   GOOGLE
========================================== */

function continuarGoogle() {

    alert(
        "Login com Google ainda não configurado."
    );
}


/* ==========================================
   LOGIN
========================================== */

function abrirLogin() {

    window.location.href =
        "login.html";
}


/* ==========================================
   TERMOS
========================================== */

function abrirTermos() {

    alert(
        "Página de Termos de Uso."
    );
}


function abrirPrivacidade() {

    alert(
        "Página de Política de Privacidade."
    );
}


/* ==========================================
   ENTER
========================================== */

function configurarEnter() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();

                criarConta();
            }
        }
    );
}


/* ==========================================
   EVENTOS
========================================== */

function configurarEventos() {

    /* CRIAR CONTA */

    btnCriarConta.addEventListener(
        "click",
        criarConta
    );


    /* GOOGLE */

    btnGoogle.addEventListener(
        "click",
        continuarGoogle
    );


    /* LOGIN */

    btnEntrar.addEventListener(
        "click",
        abrirLogin
    );


    /* TERMOS */

    btnTermos.addEventListener(
        "click",
        abrirTermos
    );


    /* PRIVACIDADE */

    btnPrivacidade.addEventListener(
        "click",
        abrirPrivacidade
    );


    /* MOSTRAR SENHA */

    toggleSenha.addEventListener(
        "click",
        function() {

            alternarSenha(
                senha,
                toggleSenha
            );
        }
    );


    /* MOSTRAR CONFIRMAÇÃO */

    toggleConfirmarSenha.addEventListener(
        "click",
        function() {

            alternarSenha(
                confirmarSenha,
                toggleConfirmarSenha
            );
        }
    );


    /* MÁSCARA CPF */

    cpf.addEventListener(
        "input",
        aplicarMascaraCPF
    );


    /* MÁSCARA TELEFONE */

    telefone.addEventListener(
        "input",
        aplicarMascaraTelefone
    );
}


/* ==========================================
   INIT
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        preencherConteudo();

        configurarEventos();

        configurarEnter();
    }
);

