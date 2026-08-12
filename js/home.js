//======================================================
// CONFIGURAÇÃO DA API
//======================================================

const API =
    "http://localhost:3000";


//======================================================
// VARIÁVEIS
//======================================================

let produtosCarregados = [];

let categoriasCarregadas = [];

let categoriaSelecionada = null;


//======================================================
// INICIALIZAÇÃO
//======================================================

document.addEventListener(
    "DOMContentLoaded",
    async function () {

        await carregarCategorias();

        await carregarProdutos();

        configurarPesquisa();

        configurarBotaoTodos();

    }
);


//======================================================
// CARREGAR CATEGORIAS
//======================================================

async function carregarCategorias() {

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


        categoriasCarregadas =
            await resposta.json();


        console.log(
            "CATEGORIAS:",
            categoriasCarregadas
        );


        mostrarCategoriasMenu();

        mostrarCategoriasRodape();

    }

    catch (erro) {

        console.error(
            "Erro categorias:",
            erro
        );

    }

}


//======================================================
// MOSTRAR CATEGORIAS NO MENU
//======================================================

function mostrarCategoriasMenu() {

    const menu =
        document.getElementById(
            "menuCategorias"
        );


    if (!menu) {

        return;

    }


    menu.innerHTML =
        "";


    //==================================================
    // TODOS
    //==================================================

    const todos =
        document.createElement(
            "button"
        );


    todos.type =
        "button";


    todos.className =
        "block w-full text-left px-4 py-3 text-xs font-semibold uppercase hover:bg-gray-100 hover:text-brandRed";


    todos.textContent =
        "Todos os Produtos";


    todos.addEventListener(
        "click",
        function () {

            categoriaSelecionada =
                null;


            document.getElementById(
                "tituloProdutos"
            ).textContent =
                "Todos os Produtos";


            mostrarProdutos(
                produtosAtivos()
            );

        }
    );


    menu.appendChild(
        todos
    );


    //==================================================
    // CATEGORIAS
    //==================================================

    categoriasCarregadas.forEach(
        function (categoria) {

            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.className =
                "block w-full text-left px-4 py-3 text-xs font-semibold uppercase hover:bg-gray-100 hover:text-brandRed border-t border-gray-100";


            botao.textContent =
                categoria.nome;


            botao.addEventListener(
                "click",
                function () {

                    filtrarCategoria(
                        categoria.idCategoria,
                        categoria.nome
                    );

                }
            );


            menu.appendChild(
                botao
            );

        }
    );

}


//======================================================
// CATEGORIAS NO RODAPÉ
//======================================================

function mostrarCategoriasRodape() {

    const lista =
        document.getElementById(
            "categoriasRodape"
        );


    if (!lista) {

        return;

    }


    lista.innerHTML =
        "";


    categoriasCarregadas.forEach(
        function (categoria) {

            const item =
                document.createElement(
                    "li"
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href =
                "#produtos";


            link.className =
                "hover:text-brandRed transition-colors cursor-pointer";


            link.textContent =
                categoria.nome;


            link.addEventListener(
                "click",
                function () {

                    filtrarCategoria(
                        categoria.idCategoria,
                        categoria.nome
                    );

                }
            );


            item.appendChild(
                link
            );


            lista.appendChild(
                item
            );

        }
    );

}


//======================================================
// CARREGAR PRODUTOS
//======================================================

async function carregarProdutos() {

    const carregando =
        document.getElementById(
            "carregandoProdutos"
        );


    try {

        //==================================================
        // PRODUTOS
        //==================================================

        const respostaProdutos =
            await fetch(
                `${API}/produtos`
            );


        if (!respostaProdutos.ok) {

            throw new Error(
                "Erro ao carregar produtos."
            );

        }


        const produtos =
            await respostaProdutos.json();


        //==================================================
        // IMAGENS
        //==================================================

        const respostaImagens =
            await fetch(
                `${API}/imagens-produtos`
            );


        if (!respostaImagens.ok) {

            throw new Error(
                "Erro ao carregar imagens."
            );

        }


        const imagens =
            await respostaImagens.json();


        console.log(
            "PRODUTOS:",
            produtos
        );


        console.log(
            "IMAGENS:",
            imagens
        );


        //==================================================
        // JUNTAR PRODUTO + IMAGEM
        //==================================================

        produtosCarregados =
            produtos.map(
                function (produto) {

                    const imagensProduto =
                        imagens.filter(
                            function (imagem) {

                                return (
                                    Number(
                                        imagem.Produto_idProduto
                                    )
                                    ===
                                    Number(
                                        produto.idProduto
                                    )
                                );

                            }
                        );


                    // PRIMEIRA IMAGEM
                    produto.imagemPrincipal =
                        imagensProduto.length > 0
                            ?
                            imagensProduto[0].arquivo
                            :
                            null;


                    produto.quantidadeImagens =
                        imagensProduto.length;


                    return produto;

                }
            );


        carregando.classList.add(
            "hidden"
        );


        mostrarProdutos(
            produtosAtivos()
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );


        carregando.classList.add(
            "hidden"
        );


        mostrarErro(
            "Não foi possível carregar os produtos."
        );

    }

}


//======================================================
// PRODUTOS ATIVOS
//======================================================

function produtosAtivos() {

    return produtosCarregados.filter(
        function (produto) {

            return (
                Number(
                    produto.ativo
                ) === 1
            );

        }
    );

}


//======================================================
// MOSTRAR PRODUTOS
//======================================================

function mostrarProdutos(
    produtos
) {

    const lista =
        document.getElementById(
            "listaProdutos"
        );


    const mensagem =
        document.getElementById(
            "mensagemProdutos"
        );


    const quantidade =
        document.getElementById(
            "quantidadeProdutos"
        );


    lista.innerHTML =
        "";


    mensagem.classList.add(
        "hidden"
    );


    quantidade.textContent =
        `${produtos.length} produto(s) encontrado(s)`;


    //==================================================
    // NENHUM PRODUTO
    //==================================================

    if (
        produtos.length === 0
    ) {

        mensagem.classList.remove(
            "hidden"
        );


        mensagem.innerHTML = `

            <i
                class="
                    fa-solid
                    fa-box-open
                    text-4xl
                    mb-3
                    text-gray-300
                "
            ></i>

            <p>
                Nenhum produto encontrado.
            </p>

        `;


        return;

    }


    //==================================================
    // CARDS
    //==================================================

    produtos.forEach(
        function (produto) {

            const card =
                criarCardProduto(
                    produto
                );


            lista.appendChild(
                card
            );

        }
    );

}


//======================================================
// CRIAR CARD
//======================================================

function criarCardProduto(
    produto
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "bg-cardBg rounded border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col";


    //==================================================
    // PREÇOS
    //==================================================

    const precoAntigo =
        Number(
            produto.preco_antigo
        ) || 0;


    const precoPromocional =
        produto.preco_promocional !== null &&
            produto.preco_promocional !== undefined
            ?
            Number(
                produto.preco_promocional
            )
            :
            null;


    const temPromocao =
        precoPromocional !== null &&
        precoPromocional > 0 &&
        precoPromocional <
        precoAntigo;


    const precoFinal =
        temPromocao
            ?
            precoPromocional
            :
            precoAntigo;


    //==================================================
    // DESCONTO
    //==================================================

    let desconto =
        0;


    if (
        temPromocao &&
        precoAntigo > 0
    ) {

        desconto =
            Math.round(
                (
                    (
                        precoAntigo -
                        precoPromocional
                    )
                    /
                    precoAntigo
                )
                *
                100
            );

    }


    //==================================================
    // IMAGEM
    //==================================================

    const imagem =
        montarImagemProduto(
            produto.imagemPrincipal
        );


    //==================================================
    // PARCELA
    //==================================================

    const parcela =
        precoFinal / 10;


    //==================================================
    // HTML
    //==================================================

    card.innerHTML = `

        <div
            class="
                relative
                w-full
                aspect-square
                bg-white
                flex
                items-center
                justify-center
                overflow-hidden
            "
        >

            ${imagem
            ?
            `

                    <img
                        src="${imagem}"
                        alt="${escaparHTML(produto.nome)}"
                        class="
                            object-contain
                            w-full
                            h-full
                            p-4
                            group-hover:scale-105
                            transition-transform
                            duration-300
                        "
                    >

                    `
            :
            `

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-gray-300
                        "
                    >

                        <i
                            class="
                                fa-solid
                                fa-image
                                text-6xl
                                mb-3
                            "
                        ></i>

                        <span
                            class="text-xs"
                        >
                            Produto sem imagem
                        </span>

                    </div>

                    `
        }


            ${desconto > 0
            ?
            `

                    <div
                        class="
                            absolute
                            top-2
                            left-2
                        "
                    >

                        <span
                            class="
                                bg-brandRed
                                text-white
                                text-[10px]
                                font-bold
                                px-2
                                py-1
                                uppercase
                                rounded
                            "
                        >

                            ${desconto}% OFF

                        </span>

                    </div>

                    `
            :
            ""
        }

        </div>


        <div
            class="
                p-4
                flex
                flex-col
                flex-grow
            "
        >


            <p
                class="
                    text-[10px]
                    text-textMuted
                    mb-1
                    uppercase
                    tracking-wide
                "
            >

                CÓDIGO:
                ${escaparHTML(
            produto.codigo || ""
        )}

            </p>


            <h4
                class="
                    text-sm
                    font-bold
                    text-gray-800
                    leading-tight
                    mb-2
                    min-h-[40px]
                    hover:text-brandRed
                    cursor-pointer
                "
            >

                ${escaparHTML(
            produto.nome || ""
        )}

            </h4>


            ${produto.descricao
            ?
            `

                    <p
                        class="
                            text-xs
                            text-gray-500
                            mb-3
                            line-clamp-2
                        "
                    >

                        ${escaparHTML(
                produto.descricao
            )}

                    </p>

                    `
            :
            ""
        }


            <!-- AVALIAÇÃO -->

            <div
                class="
                    flex
                    text-yellow-400
                    text-xs
                    mb-3
                "
            >

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <span
                    class="
                        text-gray-400
                        text-[10px]
                        ml-1
                    "
                >

                    (0)

                </span>

            </div>


            <!-- PREÇOS -->

            <div
                class="mt-auto"
            >


                ${temPromocao
            ?
            `

                        <p
                            class="
                                text-xs
                                text-gray-400
                                line-through
                            "
                        >

                            ${formatarPreco(
                precoAntigo
            )}

                        </p>


                        <p
                            class="
                                text-2xl
                                font-heading
                                font-black
                                text-brandRed
                                mt-0.5
                            "
                        >

                            ${formatarPreco(
                precoPromocional
            )}

                        </p>

                        `
            :
            `

                        <p
                            class="
                                text-2xl
                                font-heading
                                font-black
                                text-gray-900
                                mt-0.5
                            "
                        >

                            ${formatarPreco(
                precoAntigo
            )}

                        </p>

                        `
        }


                <p
                    class="
                        text-[11px]
                        text-gray-600
                        mb-4
                    "
                >

                    ou 10x de
                    ${formatarPreco(parcela)}
                    sem juros

                </p>


                <button
                    type="button"
                    class="
                        w-full
                        bg-brandRed
                        hover:bg-brandRedHover
                        text-white
                        text-sm
                        font-bold
                        uppercase
                        py-2.5
                        rounded
                        transition-colors
                        flex
                        items-center
                        justify-center
                        gap-2
                    "
                    onclick="abrirProduto(${produto.idProduto})"
                >

                    <i
                        class="fa-solid fa-cart-plus"
                    ></i>

                    Comprar

                </button>


            </div>


        </div>

    `;


    return card;

}


//======================================================
// DETECTAR TIPO DA IMAGEM BASE64
//======================================================

function montarImagemProduto(
    base64
) {

    if (!base64) {

        return null;

    }


    /*
    JPG normalmente começa com /9j/

    PNG começa com iVBOR

    WEBP começa com UklGR
    */


    if (
        base64.startsWith(
            "/9j/"
        )
    ) {

        return (
            "data:image/jpeg;base64," +
            base64
        );

    }


    if (
        base64.startsWith(
            "iVBOR"
        )
    ) {

        return (
            "data:image/png;base64," +
            base64
        );

    }


    if (
        base64.startsWith(
            "UklGR"
        )
    ) {

        return (
            "data:image/webp;base64," +
            base64
        );

    }


    // fallback
    return (
        "data:image/jpeg;base64," +
        base64
    );

}


//======================================================
// FILTRAR POR CATEGORIA
//======================================================

function filtrarCategoria(
    idCategoria,
    nomeCategoria
) {

    categoriaSelecionada =
        idCategoria;


    const resultado =
        produtosAtivos().filter(
            function (produto) {

                return (
                    Number(
                        produto.Categoria_idCategoria
                    )
                    ===
                    Number(
                        idCategoria
                    )
                );

            }
        );


    document.getElementById(
        "tituloProdutos"
    ).textContent =
        nomeCategoria;


    mostrarProdutos(
        resultado
    );


    document.getElementById(
        "produtos"
    ).scrollIntoView({

        behavior:
            "smooth"

    });

}


//======================================================
// PESQUISA
//======================================================

function configurarPesquisa() {

    const input =
        document.getElementById(
            "pesquisaProduto"
        );


    const botao =
        document.getElementById(
            "btnPesquisa"
        );


    if (!input) {

        return;

    }


    //==================================================
    // DIGITANDO
    //==================================================

    input.addEventListener(
        "input",
        pesquisarProdutos
    );


    //==================================================
    // BOTÃO
    //==================================================

    if (botao) {

        botao.addEventListener(
            "click",
            pesquisarProdutos
        );

    }

}


//======================================================
// PESQUISAR
//======================================================

function pesquisarProdutos() {

    const input =
        document.getElementById(
            "pesquisaProduto"
        );


    const texto =
        input.value
            .trim()
            .toLowerCase();


    let produtos =
        produtosAtivos();


    //==================================================
    // CATEGORIA ATIVA
    //==================================================

    if (
        categoriaSelecionada
    ) {

        produtos =
            produtos.filter(
                function (produto) {

                    return (
                        Number(
                            produto.Categoria_idCategoria
                        )
                        ===
                        Number(
                            categoriaSelecionada
                        )
                    );

                }
            );

    }


    //==================================================
    // PESQUISA VAZIA
    //==================================================

    if (
        texto === ""
    ) {

        mostrarProdutos(
            produtos
        );

        return;

    }


    //==================================================
    // FILTRAR
    //==================================================

    const resultado =
        produtos.filter(
            function (produto) {

                const nome =
                    String(
                        produto.nome || ""
                    )
                        .toLowerCase();


                const codigo =
                    String(
                        produto.codigo || ""
                    )
                        .toLowerCase();


                const descricao =
                    String(
                        produto.descricao || ""
                    )
                        .toLowerCase();


                return (

                    nome.includes(
                        texto
                    )

                    ||

                    codigo.includes(
                        texto
                    )

                    ||

                    descricao.includes(
                        texto
                    )

                );

            }
        );


    mostrarProdutos(
        resultado
    );

}


//======================================================
// BOTÃO VER TODOS
//======================================================

function configurarBotaoTodos() {

    const botao =
        document.getElementById(
            "btnTodosProdutos"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        function () {

            categoriaSelecionada =
                null;


            document.getElementById(
                "pesquisaProduto"
            ).value =
                "";


            document.getElementById(
                "tituloProdutos"
            ).textContent =
                "Todos os Produtos";


            mostrarProdutos(
                produtosAtivos()
            );

        }
    );

}


//======================================================
// FORMATAR PREÇO
//======================================================

function formatarPreco(
    valor
) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {

            style:
                "currency",

            currency:
                "BRL"

        }
    );

}


//======================================================
// PROTEGER TEXTO INSERIDO NO HTML
//======================================================

function escaparHTML(
    texto
) {

    return String(
        texto || ""
    )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


//======================================================
// ABRIR PRODUTO
//======================================================

function abrirProduto(
    idProduto
) {

    console.log(
        "Produto selecionado:",
        idProduto
    );


    /*
    Quando criarmos a página
    de detalhes do produto:

    window.location.href =
        `produto.html?id=${idProduto}`;
    */


    alert(
        "Produto selecionado: " +
        idProduto
    );

}


//======================================================
// ERRO
//======================================================

function mostrarErro(
    mensagem
) {

    const area =
        document.getElementById(
            "mensagemProdutos"
        );


    area.classList.remove(
        "hidden"
    );


    area.innerHTML = `

        <i
            class="
                fa-solid
                fa-triangle-exclamation
                text-3xl
                text-brandRed
                mb-3
            "
        ></i>

        <p>
            ${escaparHTML(mensagem)}
        </p>

    `;

}