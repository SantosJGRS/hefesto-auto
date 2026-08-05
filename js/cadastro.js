/* ==========================================
   CADASTRO.JS
   HEFESTO AUTOPEÇAS
========================================== */


/* ==========================================
   MOSTRAR / OCULTAR SENHA
========================================== */

function mostrarSenha(id, botao) {

    const input = document.getElementById(id);
    const icone = botao.querySelector("i");

    if (input.type === "password") {

        input.type = "text";

        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");

    }

}


/* ==========================================
   MÁSCARA CPF
========================================== */

const cpfInput = document.getElementById("cpf");

if (cpfInput) {

    cpfInput.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 3) {

            valor = valor.replace(
                /^(\d{3})(\d)/,
                "$1.$2"
            );

        }

        if (valor.length > 7) {

            valor = valor.replace(
                /^(\d{3})\.(\d{3})(\d)/,
                "$1.$2.$3"
            );

        }

        if (valor.length > 11) {

            valor = valor.replace(
                /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
                "$1.$2.$3-$4"
            );

        }

        this.value = valor;

    });

}


/* ==========================================
   MÁSCARA TELEFONE
========================================== */

const telefoneInput = document.getElementById("telefone");

if (telefoneInput) {

    telefoneInput.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length <= 2) {

            this.value = valor;

            return;

        }

        if (valor.length <= 7) {

            this.value =
                "(" +
                valor.substring(0, 2) +
                ") " +
                valor.substring(2);

            return;

        }

        this.value =
            "(" +
            valor.substring(0, 2) +
            ") " +
            valor.substring(2, 7) +
            "-" +
            valor.substring(7);

    });

}


/* ==========================================
   DATA DE NASCIMENTO
========================================== */

const dataNascimento =
    document.getElementById("dataNascimento");

if (dataNascimento) {

    /*
        Impede que o usuário selecione
        uma data futura.
    */

    const hoje = new Date();

    const ano = hoje.getFullYear();

    const mes = String(
        hoje.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        hoje.getDate()
    ).padStart(2, "0");

    dataNascimento.max =
        `${ano}-${mes}-${dia}`;

}


/* ==========================================
   FORMULÁRIO
========================================== */

const formCadastro =
    document.getElementById("formCadastro");


if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* ==============================
               CAPTURA DOS CAMPOS
            ============================== */

            const cpf =
                document.getElementById("cpf").value;

            const email =
                document.getElementById("email").value;

            const senha =
                document.getElementById("senha").value;

            const confirmarSenha =
                document.getElementById(
                    "confirmarSenha"
                ).value;

            const telefone =
                document.getElementById(
                    "telefone"
                ).value;

            const dataNascimento =
                document.getElementById(
                    "dataNascimento"
                ).value;


            /* ==============================
               VALIDAÇÃO DA SENHA
            ============================== */

            if (senha !== confirmarSenha) {

                alert(
                    "As senhas não coincidem!"
                );

                return;
            }


            /* ==============================
               VALIDAÇÃO CPF
            ============================== */

            const cpfNumeros =
                cpf.replace(/\D/g, "");

            if (cpfNumeros.length !== 11) {

                alert(
                    "Digite um CPF válido."
                );

                return;
            }


            /* ==============================
               VALIDAÇÃO TELEFONE
            ============================== */

            const telefoneNumeros =
                telefone.replace(/\D/g, "");

            if (
                telefoneNumeros.length !== 10 &&
                telefoneNumeros.length !== 11
            ) {

                alert(
                    "Digite um telefone válido."
                );

                return;
            }


            /* ==============================
               VALIDAÇÃO DATA
            ============================== */

            if (!dataNascimento) {

                alert(
                    "Informe sua data de nascimento."
                );

                return;
            }


            /* ==============================
               OBJETO DOS DADOS
            ============================== */

            const dadosCadastro = {

                cpf: cpf,

                email: email,

                senha: senha,

                telefone: telefone,

                data_nascimento:
                    dataNascimento,

                Loja_idLoja: 1

            };


            /* ==============================
               ENVIO PARA O BACKEND
            ============================== */

            try {

                /*
                    Quando o backend estiver pronto,
                    essa parte enviará os dados para:

                    POST /clientes
                */

                const resposta = await fetch(
                    "/clientes",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify(
                            dadosCadastro
                        )
                    }
                );


                /* ==============================
                   RESPOSTA DO SERVIDOR
                ============================== */

                const resultado =
                    await resposta.json();


                if (!resposta.ok) {

                    throw new Error(
                        resultado.mensagem ||
                        resultado.message ||
                        "Erro ao criar a conta."
                    );

                }


                /* ==============================
                   SUCESSO
                ============================== */

                alert(
                    "Conta criada com sucesso!"
                );


                /*
                    Depois do cadastro,
                    manda o usuário para o login.
                */

                window.location.href =
                    "login.html";


            } catch (erro) {

                console.error(
                    "Erro no cadastro:",
                    erro
                );


                alert(
                    erro.message ||
                    "Não foi possível criar sua conta."
                );

            }

        }
    );

}