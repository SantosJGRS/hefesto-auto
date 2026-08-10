
/* ==========================================
   CADASTRO DE CLIENTE - HEFESTO AUTOPEÇAS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // ELEMENTOS DO FORMULÁRIO
    // ==========================================

    const cadastroForm = document.getElementById('cadastroForm');

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const nascimentoInput = document.getElementById('nascimento');

    const toggleSenhaBtn = document.getElementById('toggleSenha');
    const btnCadastrar = document.getElementById('btnCadastrar');


    // ==========================================
    // MOSTRAR / OCULTAR SENHA
    // ==========================================

    if (toggleSenhaBtn && senhaInput) {

        toggleSenhaBtn.addEventListener('click', () => {

            const icon = toggleSenhaBtn.querySelector('i');

            if (senhaInput.type === 'password') {

                senhaInput.type = 'text';

                if (icon) {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }

                toggleSenhaBtn.setAttribute(
                    'aria-label',
                    'Ocultar senha'
                );

            } else {

                senhaInput.type = 'password';

                if (icon) {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }

                toggleSenhaBtn.setAttribute(
                    'aria-label',
                    'Mostrar senha'
                );
            }
        });
    }


    // ==========================================
    // MÁSCARA CPF
    // 000.000.000-00
    // ==========================================

    if (cpfInput) {

        cpfInput.addEventListener('input', (event) => {

            let valor = event.target.value.replace(/\D/g, '');

            if (valor.length > 11) {
                valor = valor.substring(0, 11);
            }

            if (valor.length > 9) {

                valor = valor.replace(
                    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                    '$1.$2.$3-$4'
                );

            } else if (valor.length > 6) {

                valor = valor.replace(
                    /^(\d{3})(\d{3})(\d{1,3})$/,
                    '$1.$2.$3'
                );

            } else if (valor.length > 3) {

                valor = valor.replace(
                    /^(\d{3})(\d{1,3})$/,
                    '$1.$2'
                );
            }

            event.target.value = valor;
        });
    }


    // ==========================================
    // MÁSCARA TELEFONE
    // (00) 00000-0000
    // ==========================================

    if (telefoneInput) {

        telefoneInput.addEventListener('input', (event) => {

            let valor = event.target.value.replace(/\D/g, '');

            if (valor.length > 11) {
                valor = valor.substring(0, 11);
            }

            if (valor.length > 10) {

                valor = valor.replace(
                    /^(\d{2})(\d{5})(\d{4})$/,
                    '($1) $2-$3'
                );

            } else if (valor.length > 6) {

                valor = valor.replace(
                    /^(\d{2})(\d{4,5})(\d{0,4})$/,
                    '($1) $2-$3'
                );

            } else if (valor.length > 2) {

                valor = valor.replace(
                    /^(\d{2})(\d+)$/,
                    '($1) $2'
                );
            }

            event.target.value = valor;
        });
    }


    // ==========================================
    // MÁSCARA DATA DE NASCIMENTO
    // 00/00/0000
    // ==========================================

    if (nascimentoInput) {

        nascimentoInput.addEventListener('input', (event) => {

            let valor = event.target.value.replace(/\D/g, '');

            if (valor.length > 8) {
                valor = valor.substring(0, 8);
            }

            if (valor.length > 4) {

                valor = valor.replace(
                    /^(\d{2})(\d{2})(\d{1,4})$/,
                    '$1/$2/$3'
                );

            } else if (valor.length > 2) {

                valor = valor.replace(
                    /^(\d{2})(\d{1,2})$/,
                    '$1/$2'
                );
            }

            event.target.value = valor;
        });
    }


    // ==========================================
    // FUNÇÃO PARA CONVERTER DATA
    // DD/MM/AAAA -> AAAA-MM-DD
    // ==========================================

    function converterData(data) {

        const partes = data.split('/');

        if (partes.length !== 3) {
            return null;
        }

        const dia = partes[0];
        const mes = partes[1];
        const ano = partes[2];

        if (
            dia.length !== 2 ||
            mes.length !== 2 ||
            ano.length !== 4
        ) {
            return null;
        }

        const diaNumero = Number(dia);
        const mesNumero = Number(mes);
        const anoNumero = Number(ano);

        const dataTeste = new Date(
            anoNumero,
            mesNumero - 1,
            diaNumero
        );

        if (
            dataTeste.getFullYear() !== anoNumero ||
            dataTeste.getMonth() !== mesNumero - 1 ||
            dataTeste.getDate() !== diaNumero
        ) {
            return null;
        }

        return `${ano}-${mes}-${dia}`;
    }


    // ==========================================
    // ENVIO DO FORMULÁRIO
    // ==========================================

    if (cadastroForm) {

        cadastroForm.addEventListener('submit', async (event) => {

            event.preventDefault();


            // ==========================================
            // PEGAR TODOS OS 6 CAMPOS DO HTML
            // ==========================================

            const nome = nomeInput.value.trim();

            const email = emailInput.value.trim();

            const senha = senhaInput.value;

            const cpf = cpfInput.value.replace(/\D/g, '');

            const telefone = telefoneInput.value.replace(/\D/g, '');

            const nascimento = nascimentoInput.value.trim();


            // ==========================================
            // VERIFICAR CAMPOS VAZIOS
            // ==========================================

            if (!nome) {

                alert('Digite seu nome completo.');

                nomeInput.focus();

                return;
            }


            if (!email) {

                alert('Digite seu e-mail.');

                emailInput.focus();

                return;
            }


            if (!senha) {

                alert('Digite sua senha.');

                senhaInput.focus();

                return;
            }


            if (!cpf) {

                alert('Digite seu CPF.');

                cpfInput.focus();

                return;
            }


            if (!telefone) {

                alert('Digite seu telefone.');

                telefoneInput.focus();

                return;
            }


            if (!nascimento) {

                alert('Digite sua data de nascimento.');

                nascimentoInput.focus();

                return;
            }


            // ==========================================
            // VALIDAR E-MAIL
            // ==========================================

            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailValido.test(email)) {

                alert('Digite um e-mail válido.');

                emailInput.focus();

                return;
            }


            // ==========================================
            // VALIDAR CPF
            // ==========================================

            if (cpf.length !== 11) {

                alert('O CPF deve possuir 11 números.');

                cpfInput.focus();

                return;
            }


            // ==========================================
            // VALIDAR TELEFONE
            // ==========================================

            if (
                telefone.length !== 10 &&
                telefone.length !== 11
            ) {

                alert('Digite um telefone válido.');

                telefoneInput.focus();

                return;
            }


            // ==========================================
            // CONVERTER E VALIDAR DATA
            // ==========================================

            const dataNascimento =
                converterData(nascimento);

            if (!dataNascimento) {

                alert(
                    'Digite uma data de nascimento válida.\n' +
                    'Exemplo: 20/05/2009'
                );

                nascimentoInput.focus();

                return;
            }


            // ==========================================
            // OBJETO FINAL DO CLIENTE
            // ==========================================

            const cliente = {

                nome: nome,

                cpf: cpf,

                telefone: telefone,

                email: email,

                senha: senha,

                data_nascimento: dataNascimento,

                Loja_idLoja: 1
            };


            console.log(
                'Dados que serão enviados:',
                cliente
            );


            // ==========================================
            // BOTÃO - CADASTRANDO
            // ==========================================

            btnCadastrar.disabled = true;

            btnCadastrar.textContent = 'Cadastrando...';


            try {

                // ==========================================
                // ENVIAR PARA O NODE.JS / EXPRESS
                // ==========================================

                const resposta = await fetch(
                    'http://localhost:3000/clientes',
                    {
                        method: 'POST',

                        headers: {
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify(cliente)
                    }
                );


                // ==========================================
                // LER RESPOSTA DO SERVIDOR
                // ==========================================

                let resultado = null;

                try {

                    resultado = await resposta.json();

                } catch (erro) {

                    resultado = null;
                }


                // ==========================================
                // SE DEU ERRO
                // ==========================================

                if (!resposta.ok) {

                    console.error(
                        'Erro retornado pelo servidor:',
                        resultado
                    );

                    alert(
                        resultado?.mensagem ||
                        resultado?.message ||
                        'Não foi possível cadastrar o usuário.'
                    );

                    return;
                }


                // ==========================================
                // SUCESSO
                // ==========================================

                console.log(
                    'Cliente cadastrado com sucesso:',
                    resultado
                );

                alert(
                    'Conta criada com sucesso!'
                );


                // ==========================================
                // IR PARA LOGIN
                // ==========================================

                window.location.href = 'login.html';


            } catch (erro) {

                console.error(
                    'Erro na conexão com o servidor:',
                    erro
                );

                alert(
                    'Erro ao conectar com o servidor.\n\n' +
                    'Verifique se o backend está ligado.'
                );

            } finally {

                btnCadastrar.disabled = false;

                btnCadastrar.textContent = 'Cadastrar';
            }
        });
    }

});

