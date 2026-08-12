//======================================================
// CONFIGURAÇÃO DA API
//======================================================

const API =
    "http://localhost:3000";


//======================================================
// AO CARREGAR A PÁGINA
//======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarCategorias();

        carregarMarcas();

        carregarProdutos();

        carregarProdutosImagem();

        configurarModais();

        configurarStatus();

        configurarCadastroCategoria();

        configurarCadastroMarca();

        configurarCadastroProduto();

        configurarUploadImagens();

        configurarCadastroImagens();

        configurarTags();

        configurarPesquisa();

    }
);


//======================================================
// ABRIR MODAL
//======================================================

function abrirModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.add(
            "active"
        );

    }

}


//======================================================
// FECHAR MODAL
//======================================================

function fecharModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


//======================================================
// CONFIGURAR MODAIS
//======================================================

function configurarModais() {

    const btnCategoria =
        document.getElementById(
            "btnModalCategoria"
        );


    const btnMarca =
        document.getElementById(
            "btnModalMarca"
        );


    if (btnCategoria) {

        btnCategoria.addEventListener(
            "click",
            function () {

                abrirModal(
                    "modalCategoria"
                );

            }
        );

    }


    if (btnMarca) {

        btnMarca.addEventListener(
            "click",
            function () {

                abrirModal(
                    "modalMarca"
                );

            }
        );

    }

}


//======================================================
// STATUS
//======================================================

function configurarStatus() {

    const status =
        document.getElementById(
            "statusAtivo"
        );


    const texto =
        document.getElementById(
            "toggleText"
        );


    if (!status || !texto) {

        return;

    }


    status.addEventListener(
        "change",
        function () {

            texto.textContent =
                status.checked
                    ? "Ativo"
                    : "Inativo";

        }
    );

}


//======================================================
// CARREGAR CATEGORIAS
//======================================================

async function carregarCategorias() {

    const select =
        document.getElementById(
            "selectCategoria"
        );


    if (!select) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/categorias`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar categorias."
            );

        }


        const categorias =
            await resposta.json();


        select.innerHTML = `

            <option value="">
                Selecione uma Categoria
            </option>

        `;


        categorias.forEach(
            function (categoria) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    categoria.idCategoria;


                option.textContent =
                    categoria.nome;


                select.appendChild(
                    option
                );

            }
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );

    }

}


//======================================================
// CARREGAR MARCAS
//======================================================

async function carregarMarcas() {

    const select =
        document.getElementById(
            "selectMarca"
        );


    if (!select) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/marcas`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar marcas."
            );

        }


        const marcas =
            await resposta.json();


        select.innerHTML = `

            <option value="">
                Selecione uma Marca
            </option>

        `;


        marcas.forEach(
            function (marca) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    marca.idMarca;


                option.textContent =
                    marca.nome;


                select.appendChild(
                    option
                );

            }
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar marcas:",
            erro
        );

    }

}


//======================================================
// CARREGAR PRODUTOS NO SELECT DE IMAGENS
//======================================================

async function carregarProdutosImagem() {

    const select =
        document.getElementById(
            "selectProdutoImagem"
        );


    if (!select) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar produtos."
            );

        }


        const produtos =
            await resposta.json();


        select.innerHTML = `

            <option value="">

                Selecione um Produto

            </option>

        `;


        produtos.forEach(
            function (produto) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    produto.idProduto;


                option.textContent =
                    `${produto.nome} - ${produto.codigo}`;


                select.appendChild(
                    option
                );

            }
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar produtos para imagens:",
            erro
        );

    }

}


//======================================================
// CADASTRAR CATEGORIA
//======================================================

function configurarCadastroCategoria() {

    const form =
        document.getElementById(
            "formNovaCategoria"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const campo =
                document.getElementById(
                    "nomeNovaCategoria"
                );


            const nome =
                campo.value.trim();


            if (nome === "") {

                alert(
                    "Informe o nome da categoria."
                );

                return;

            }


            try {

                const resposta =
                    await fetch(
                        `${API}/categorias`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify({

                                    nome:
                                        nome

                                })

                        }
                    );


                const data =
                    await resposta.json();


                if (!resposta.ok) {

                    alert(
                        data.mensagem ||
                        "Erro ao cadastrar categoria."
                    );

                    return;

                }


                alert(
                    "Categoria cadastrada com sucesso!"
                );


                campo.value =
                    "";


                fecharModal(
                    "modalCategoria"
                );


                await carregarCategorias();


                if (
                    data.idCategoria
                ) {

                    document.getElementById(
                        "selectCategoria"
                    ).value =
                        data.idCategoria;

                }

            }

            catch (erro) {

                console.error(
                    "Erro categoria:",
                    erro
                );


                alert(
                    "Não foi possível conectar ao servidor."
                );

            }

        }
    );

}


//======================================================
// CADASTRAR MARCA
//======================================================

function configurarCadastroMarca() {

    const form =
        document.getElementById(
            "formNovaMarca"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const campo =
                document.getElementById(
                    "nomeNovaMarca"
                );


            const nome =
                campo.value.trim();


            if (nome === "") {

                alert(
                    "Informe o nome da marca."
                );

                return;

            }


            try {

                const resposta =
                    await fetch(
                        `${API}/marcas`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify({

                                    nome:
                                        nome

                                })

                        }
                    );


                const data =
                    await resposta.json();


                if (!resposta.ok) {

                    alert(
                        data.mensagem ||
                        "Erro ao cadastrar marca."
                    );

                    return;

                }


                alert(
                    "Marca cadastrada com sucesso!"
                );


                campo.value =
                    "";


                fecharModal(
                    "modalMarca"
                );


                await carregarMarcas();


                if (
                    data.idMarca
                ) {

                    document.getElementById(
                        "selectMarca"
                    ).value =
                        data.idMarca;

                }

            }

            catch (erro) {

                console.error(
                    "Erro marca:",
                    erro
                );


                alert(
                    "Não foi possível conectar ao servidor."
                );

            }

        }
    );

}


//======================================================
// CADASTRAR PRODUTO
//======================================================

function configurarCadastroProduto() {

    const form =
        document.getElementById(
            "productForm"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            //==================================================
            // CAPTURAR CAMPOS
            //==================================================

            const nome =
                document.getElementById(
                    "nomePeca"
                )
                    .value
                    .trim();


            const codigo =
                document.getElementById(
                    "skuNumber"
                )
                    .value
                    .trim();


            const descricao =
                document.getElementById(
                    "descricao"
                )
                    .value
                    .trim();


            const preco =
                parseFloat(
                    document.getElementById(
                        "preco"
                    ).value
                );


            const desconto =
                parseFloat(
                    document.getElementById(
                        "desconto"
                    ).value
                ) || 0;


            const estoque =
                parseInt(
                    document.getElementById(
                        "estoque"
                    ).value
                );


            const categoria =
                document.getElementById(
                    "selectCategoria"
                ).value;


            const marca =
                document.getElementById(
                    "selectMarca"
                ).value;


            const ativo =
                document.getElementById(
                    "statusAtivo"
                ).checked
                    ? 1
                    : 0;


            //==================================================
            // VALIDAR
            //==================================================

            if (
                nome === "" ||
                codigo === "" ||
                isNaN(preco) ||
                isNaN(estoque) ||
                categoria === "" ||
                marca === ""
            ) {

                alert(
                    "Preencha todos os campos obrigatórios."
                );

                return;

            }


            if (
                preco < 0
            ) {

                alert(
                    "O preço não pode ser negativo."
                );

                return;

            }


            if (
                estoque < 0
            ) {

                alert(
                    "O estoque não pode ser negativo."
                );

                return;

            }


            if (
                desconto < 0 ||
                desconto > 100
            ) {

                alert(
                    "O desconto deve estar entre 0 e 100."
                );

                return;

            }


            //==================================================
            // PREÇO PROMOCIONAL
            //==================================================

            let precoPromocional =
                null;


            if (
                desconto > 0
            ) {

                precoPromocional =
                    preco -
                    (
                        preco *
                        desconto /
                        100
                    );


                precoPromocional =
                    Number(
                        precoPromocional
                            .toFixed(2)
                    );

            }


            //==================================================
            // OBJETO PRODUTO
            //==================================================

            const produto = {

                nome:
                    nome,

                descricao:
                    descricao,

                codigo:
                    codigo,

                preco_antigo:
                    preco,

                preco_promocional:
                    precoPromocional,

                quantidade_estoque:
                    estoque,

                ativo:
                    ativo,

                Loja_idLoja:
                    1,

                Categoria_idCategoria:
                    Number(
                        categoria
                    ),

                Marca_idMarca:
                    Number(
                        marca
                    )

            };


            //==================================================
            // ENVIAR
            //==================================================

            try {

                const resposta =
                    await fetch(
                        `${API}/produtos`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    produto
                                )

                        }
                    );


                const data =
                    await resposta.json();


                if (!resposta.ok) {

                    alert(
                        data.mensagem ||
                        "Erro ao cadastrar produto."
                    );

                    return;

                }


                alert(
                    "Produto cadastrado com sucesso!"
                );


                //==================================================
                // LIMPAR
                //==================================================

                form.reset();


                document.getElementById(
                    "statusAtivo"
                ).checked =
                    true;


                document.getElementById(
                    "toggleText"
                ).textContent =
                    "Ativo";


                const tags =
                    document.getElementById(
                        "tagsList"
                    );


                if (tags) {

                    tags.innerHTML =
                        "";

                }


                //==================================================
                // ATUALIZAR LISTAS
                //==================================================

                await carregarProdutos();

                await carregarProdutosImagem();


                //==================================================
                // SELECIONAR PRODUTO RECÉM CADASTRADO
                //==================================================

                if (
                    data.idProduto
                ) {

                    document.getElementById(
                        "selectProdutoImagem"
                    ).value =
                        data.idProduto;

                }

            }

            catch (erro) {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );


                alert(
                    "Não foi possível cadastrar o produto."
                );

            }

        }
    );

}


//======================================================
// CONFIGURAR UPLOAD DE IMAGENS
//======================================================

function configurarUploadImagens() {

    const dropzone =
        document.getElementById(
            "dropzoneImagemProduto"
        );


    const input =
        document.getElementById(
            "inputImagensProduto"
        );


    const preview =
        document.getElementById(
            "previewImagensProduto"
        );


    if (
        !dropzone ||
        !input ||
        !preview
    ) {

        return;

    }


    //==================================================
    // CLICAR PARA ESCOLHER
    //==================================================

    dropzone.addEventListener(
        "click",
        function () {

            input.click();

        }
    );


    //==================================================
    // PREVIEW
    //==================================================

    input.addEventListener(
        "change",
        function () {

            preview.innerHTML =
                "";


            const arquivos =
                Array.from(
                    input.files
                );


            arquivos.forEach(
                function (arquivo) {


                    if (
                        !arquivo.type.startsWith(
                            "image/"
                        )
                    ) {

                        return;

                    }


                    const reader =
                        new FileReader();


                    reader.onload =
                        function (event) {

                            const imagem =
                                document.createElement(
                                    "img"
                                );


                            imagem.src =
                                event.target.result;


                            imagem.className =
                                "preview-thumb";


                            preview.appendChild(
                                imagem
                            );

                        };


                    reader.readAsDataURL(
                        arquivo
                    );

                }
            );

        }
    );

}


//======================================================
// CADASTRAR IMAGENS
//======================================================

function configurarCadastroImagens() {

    const botao =
        document.getElementById(
            "btnSalvarImagens"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        async function () {


            //==================================================
            // PRODUTO SELECIONADO
            //==================================================

            const idProduto =
                document.getElementById(
                    "selectProdutoImagem"
                ).value;


            //==================================================
            // IMAGENS
            //==================================================

            const input =
                document.getElementById(
                    "inputImagensProduto"
                );


            const arquivos =
                Array.from(
                    input.files
                );


            //==================================================
            // VALIDAR PRODUTO
            //==================================================

            if (
                !idProduto
            ) {

                alert(
                    "Selecione o produto."
                );

                return;

            }


            //==================================================
            // VALIDAR IMAGEM
            //==================================================

            if (
                arquivos.length === 0
            ) {

                alert(
                    "Selecione pelo menos uma imagem."
                );

                return;

            }


            //==================================================
            // DESABILITAR BOTÃO
            //==================================================

            botao.disabled =
                true;


            botao.innerHTML = `

                <i class="fa-solid fa-spinner fa-spin"></i>

                Salvando...

            `;


            try {


                //==================================================
                // CADASTRAR CADA IMAGEM
                //==================================================

                for (
                    const arquivo
                    of arquivos
                ) {


                    //==================================================
                    // VALIDAR TIPO
                    //==================================================

                    if (
                        !arquivo.type.startsWith(
                            "image/"
                        )
                    ) {

                        throw new Error(
                            "Selecione somente arquivos de imagem."
                        );

                    }


                    //==================================================
                    // VALIDAR TAMANHO
                    //==================================================

                    if (
                        arquivo.size >
                        3 * 1024 * 1024
                    ) {

                        throw new Error(
                            `A imagem ${arquivo.name} ultrapassa 3MB.`
                        );

                    }


                    //==================================================
                    // CRIAR FORMDATA
                    //==================================================

                    const formData =
                        new FormData();


                    //==================================================
                    // ARQUIVO
                    //==================================================

                    formData.append(
                        "arquivo",
                        arquivo
                    );


                    //==================================================
                    // ID PRODUTO
                    //==================================================

                    formData.append(
                        "Produto_idProduto",
                        idProduto
                    );


                    console.log(
                        "Produto:",
                        idProduto
                    );


                    console.log(
                        "Imagem:",
                        arquivo.name
                    );


                    //==================================================
                    // ENVIAR
                    //==================================================

                    const resposta =
                        await fetch(
                            `${API}/imagens-produtos`,
                            {

                                method:
                                    "POST",

                                body:
                                    formData

                            }
                        );


                    //==================================================
                    // RESPOSTA
                    //==================================================

                    const texto =
                        await resposta.text();


                    console.log(
                        "Resposta imagem:",
                        texto
                    );


                    let data;


                    try {

                        data =
                            JSON.parse(
                                texto
                            );

                    }

                    catch {

                        throw new Error(
                            "O servidor retornou uma resposta inválida."
                        );

                    }


                    if (
                        !resposta.ok
                    ) {

                        throw new Error(
                            data.mensagem ||
                            "Erro ao cadastrar imagem."
                        );

                    }

                }


                //==================================================
                // SUCESSO
                //==================================================

                alert(
                    "Imagens cadastradas com sucesso!"
                );


                //==================================================
                // LIMPAR IMAGENS
                //==================================================

                input.value =
                    "";


                document.getElementById(
                    "previewImagensProduto"
                ).innerHTML =
                    "";


                //==================================================
                // MANTER PRODUTO SELECIONADO
                //==================================================

                /*
                Não limpamos o produto.

                Assim você pode adicionar
                mais imagens para o mesmo
                produto se quiser.
                */


            }

            catch (erro) {

                console.error(
                    "Erro ao cadastrar imagens:",
                    erro
                );


                alert(
                    "Erro ao cadastrar imagem: " +
                    erro.message
                );

            }

            finally {

                botao.disabled =
                    false;


                botao.innerHTML = `

                    <i class="fa-solid fa-image"></i>

                    Salvar Imagens

                `;

            }

        }
    );

}


//======================================================
// LISTAR PRODUTOS
//======================================================

async function carregarProdutos() {

    const tabela =
        document.getElementById(
            "tabelaProdutos"
        );


    if (!tabela) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar produtos."
            );

        }


        const produtos =
            await resposta.json();


        tabela.innerHTML =
            "";


        produtos.forEach(
            function (produto) {


                const linha =
                    document.createElement(
                        "tr"
                    );


                const categoria =
                    produto.categoria_nome ||
                    produto.nomeCategoria ||
                    produto.Categoria_idCategoria ||
                    "-";


                const marca =
                    produto.marca_nome ||
                    produto.nomeMarca ||
                    produto.Marca_idMarca ||
                    "-";


                const preco =
                    produto.preco_promocional != null
                        ?
                        produto.preco_promocional
                        :
                        produto.preco_antigo;


                const status =
                    produto.ativo == 1
                        ?
                        "Ativo"
                        :
                        "Inativo";


                linha.innerHTML = `

                    <td>
                        ${produto.nome || ""}
                    </td>

                    <td>
                        ${produto.codigo || ""}
                    </td>

                    <td>
                        ${categoria}
                    </td>

                    <td>
                        ${marca}
                    </td>

                    <td>
                        R$ ${formatarPreco(preco)}
                    </td>

                    <td>
                        ${produto.quantidade_estoque ?? 0}
                    </td>

                    <td>
                        ${status}
                    </td>

                `;


                tabela.appendChild(
                    linha
                );

            }
        );

    }

    catch (erro) {

        console.error(
            "Erro ao listar produtos:",
            erro
        );


        tabela.innerHTML = `

            <tr>

                <td colspan="7">

                    Não foi possível carregar os produtos.

                </td>

            </tr>

        `;

    }

}


//======================================================
// FORMATAR PREÇO
//======================================================

function formatarPreco(valor) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {

            minimumFractionDigits:
                2,

            maximumFractionDigits:
                2

        }
    );

}


//======================================================
// TAGS
//======================================================

function configurarTags() {

    const input =
        document.getElementById(
            "compatibilidadeInput"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key !==
                "Enter"
            ) {

                return;

            }


            event.preventDefault();


            const texto =
                input.value.trim();


            if (
                texto === ""
            ) {

                return;

            }


            criarTag(
                texto
            );


            input.value =
                "";

        }
    );

}


//======================================================
// CRIAR TAG
//======================================================

function criarTag(texto) {

    const lista =
        document.getElementById(
            "tagsList"
        );


    if (!lista) {

        return;

    }


    const tag =
        document.createElement(
            "span"
        );


    tag.className =
        "tag-chip";


    tag.innerHTML = `

        ${texto}

        <i class="fa-solid fa-xmark"></i>

    `;


    tag.querySelector(
        "i"
    ).addEventListener(
        "click",
        function () {

            tag.remove();

        }
    );


    lista.appendChild(
        tag
    );

}


//======================================================
// PESQUISA
//======================================================

function configurarPesquisa() {

    const input =
        document.getElementById(
            "inputBusca"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "input",
        function () {


            const pesquisa =
                input.value
                    .toLowerCase();


            const linhas =
                document.querySelectorAll(
                    "#tabelaProdutos tr"
                );


            linhas.forEach(
                function (linha) {


                    const texto =
                        linha.textContent
                            .toLowerCase();


                    linha.style.display =
                        texto.includes(
                            pesquisa
                        )
                            ?
                            ""
                            :
                            "none";

                }
            );

        }
    );

}