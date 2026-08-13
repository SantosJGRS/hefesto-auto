//======================================================
// CONFIGURAÇÃO DA API
//======================================================

const API =
    "http://localhost:3000";


//======================================================
// VARIÁVEIS GLOBAIS
//======================================================

let bannersCarregados = [];

let imagemBannerBase64 = null;

let idBannerEmEdicao = null;


//======================================================
// AO CARREGAR A PÁGINA
//======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarBanners();

        configurarUploadImagem();

        configurarCadastroBanner();

        configurarPesquisa();

        configurarBotaoLimpar();

    }
);


//======================================================
// CARREGAR BANNERS
//======================================================

async function carregarBanners() {

    try {

        const resposta =
            await fetch(
                `${API}/banners`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar banners do servidor."
            );

        }


        bannersCarregados =
            await resposta.json();


        renderizarTabelaBanners(
            bannersCarregados
        );

    } catch (erro) {

        console.warn(
            "Servidor offline. Carregando banners de demonstração:",
            erro
        );


        bannersCarregados = [
            {
                id: "1",
                titulo: "Ofertas de Pneus e Rodas",
                posicao: "principal",
                status: "ativo",
                link: "https://hefestoauto.com.br/promocao",
                dataInicio: "2026-01-01",
                dataFim: "2026-12-31",
                imagem: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=300"
            },
            {
                id: "2",
                titulo: "Desconto em Discos de Freio",
                posicao: "secundario",
                status: "inativo",
                link: "https://hefestoauto.com.br/freios",
                dataInicio: "",
                dataFim: "",
                imagem: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=300"
            }
        ];


        renderizarTabelaBanners(
            bannersCarregados
        );

    }

}


//======================================================
// RENDERIZAR TABELA DE BANNERS
//======================================================

function renderizarTabelaBanners(
    lista
) {

    const tabela =
        document.getElementById(
            "tabelaBanners"
        );


    if (!tabela) {

        return;

    }


    tabela.innerHTML =
        "";


    if (!lista || lista.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 24px;">
                    Nenhum banner cadastrado.
                </td>
            </tr>
        `;

        return;

    }


    lista.forEach(
        function (banner) {


            const tr =
                document.createElement(
                    "tr"
                );


            const classeStatus =
                banner.status === "ativo"
                    ?
                    "ativo"
                    :
                    "inativo";


            const textoStatus =
                banner.status === "ativo"
                    ?
                    "Ativo"
                    :
                    "Inativo";


            tr.innerHTML = `

                <td class="banner-thumb-cell">

                    <img
                        src="${banner.imagem || 'https://via.placeholder.com/150'}"
                        alt="${banner.titulo}"
                    >

                </td>

                <td>

                    <strong>${banner.titulo}</strong>

                </td>

                <td>

                    <span style="text-transform: capitalize;">
                        ${banner.posicao}
                    </span>

                </td>

                <td>

                    <span class="badge-status ${classeStatus}">
                        ${textoStatus}
                    </span>

                </td>

                <td>

                    <div class="action-buttons">

                        <button
                            type="button"
                            class="btn-action"
                            title="Editar Banner"
                            onclick="editarBanner('${banner.id}')"
                        >

                            <i class="fa-solid fa-pen-to-square"></i>

                        </button>

                        <button
                            type="button"
                            class="btn-action"
                            title="Excluir Banner"
                            onclick="excluirBanner('${banner.id}')"
                        >

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </td>

            `;


            tabela.appendChild(
                tr
            );

        }
    );

}


//======================================================
// UPLOAD DE IMAGEM & DRAG AND DROP
//======================================================

function configurarUploadImagem() {

    const areaUpload =
        document.getElementById(
            "areaUploadBanner"
        );


    const inputImagem =
        document.getElementById(
            "inputImagemBanner"
        );


    const previewContainer =
        document.getElementById(
            "previewImagemContainer"
        );


    const imgPreview =
        document.getElementById(
            "imgPreviewBanner"
        );


    const btnRemover =
        document.getElementById(
            "btnRemoverImagem"
        );


    if (!areaUpload || !inputImagem) {

        return;

    }


    areaUpload.addEventListener(
        "click",
        function () {

            inputImagem.click();

        }
    );


    // Suporte para Drag & Drop
    ["dragenter", "dragover"].forEach(
        function (nomeEvento) {

            areaUpload.addEventListener(
                nomeEvento,
                function (e) {

                    e.preventDefault();

                    areaUpload.classList.add(
                        "dragover"
                    );

                }
            );

        }
    );


    ["dragleave", "drop"].forEach(
        function (nomeEvento) {

            areaUpload.addEventListener(
                nomeEvento,
                function (e) {

                    e.preventDefault();

                    areaUpload.classList.remove(
                        "dragover"
                    );

                }
            );

        }
    );


    areaUpload.addEventListener(
        "drop",
        function (e) {

            const arquivos =
                e.dataTransfer.files;


            if (arquivos.length > 0) {

                processarArquivoImagem(
                    arquivos[0]
                );

            }

        }
    );


    inputImagem.addEventListener(
        "change",
        function (evento) {


            const arquivo =
                evento.target.files[0];


            if (arquivo) {

                processarArquivoImagem(
                    arquivo
                );

            }

        }
    );


    if (btnRemover) {

        btnRemover.addEventListener(
            "click",
            function () {

                removerImagemPreview();

            }
        );

    }

}


function processarArquivoImagem(
    arquivo
) {

    const areaUpload =
        document.getElementById(
            "areaUploadBanner"
        );


    const previewContainer =
        document.getElementById(
            "previewImagemContainer"
        );


    const imgPreview =
        document.getElementById(
            "imgPreviewBanner"
        );


    const reader =
        new FileReader();


    reader.onload =
        function (e) {


            imagemBannerBase64 =
                e.target.result;


            imgPreview.src =
                imagemBannerBase64;


            previewContainer.classList.remove(
                "hidden"
            );


            areaUpload.classList.add(
                "hidden"
            );

        };


    reader.readAsDataURL(
        arquivo
    );

}


function removerImagemPreview() {

    const areaUpload =
        document.getElementById(
            "areaUploadBanner"
        );


    const inputImagem =
        document.getElementById(
            "inputImagemBanner"
        );


    const previewContainer =
        document.getElementById(
            "previewImagemContainer"
        );


    const imgPreview =
        document.getElementById(
            "imgPreviewBanner"
        );


    imagemBannerBase64 =
        null;


    if (inputImagem) {

        inputImagem.value =
            "";

    }


    if (imgPreview) {

        imgPreview.src =
            "";

    }


    if (previewContainer) {

        previewContainer.classList.add(
            "hidden"
        );

    }


    if (areaUpload) {

        areaUpload.classList.remove(
            "hidden"
        );

    }

}


//======================================================
// CADASTRO / ATUALIZAÇÃO DE BANNER
//======================================================

function configurarCadastroBanner() {

    const form =
        document.getElementById(
            "formCadastroBanner"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function (evento) {


            evento.preventDefault();


            const titulo =
                document.getElementById(
                    "tituloBanner"
                ).value;


            const posicao =
                document.getElementById(
                    "posicaoBanner"
                ).value;


            const status =
                document.getElementById(
                    "statusBanner"
                ).value;


            const link =
                document.getElementById(
                    "linkBanner"
                ).value;


            const dataInicio =
                document.getElementById(
                    "dataInicio"
                ).value;


            const dataFim =
                document.getElementById(
                    "dataFim"
                ).value;


            // MODO DE EDIÇÃO
            if (idBannerEmEdicao) {


                const index =
                    bannersCarregados.findIndex(
                        function (item) {

                            return item.id === idBannerEmEdicao;

                        }
                    );


                if (index !== -1) {


                    bannersCarregados[index] = {

                        id: idBannerEmEdicao,

                        titulo: titulo,

                        posicao: posicao,

                        status: status,

                        link: link,

                        dataInicio: dataInicio,

                        dataFim: dataFim,

                        imagem: imagemBannerBase64 || bannersCarregados[index].imagem

                    };


                    try {

                        await fetch(
                            `${API}/banners/${idBannerEmEdicao}`,
                            {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(
                                    bannersCarregados[index]
                                )
                            }
                        );

                    } catch (erro) {

                        console.warn(
                            "Servidor offline: atualização local efetuada.",
                            erro
                        );

                    }


                    alert(
                        "Banner atualizado com sucesso!"
                    );

                }


            } else {


                // MODO DE CRIAÇÃO
                const novoBanner = {

                    id: Date.now().toString(),

                    titulo: titulo,

                    posicao: posicao,

                    status: status,

                    link: link,

                    dataInicio: dataInicio,

                    dataFim: dataFim,

                    imagem: imagemBannerBase64 || "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=300"

                };


                try {

                    await fetch(
                        `${API}/banners`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(
                                novoBanner
                            )
                        }
                    );

                } catch (erro) {

                    console.warn(
                        "Servidor offline: cadastro local efetuado.",
                        erro
                    );

                }


                bannersCarregados.unshift(
                    novoBanner
                );


                alert(
                    "Banner cadastrado com sucesso!"
                );

            }


            renderizarTabelaBanners(
                bannersCarregados
            );


            limparFormulario();

        }
    );

}


//======================================================
// LIMPAR FORMULÁRIO E RESETAR EDIÇÃO
//======================================================

function configurarBotaoLimpar() {

    const btnLimpar =
        document.getElementById(
            "btnLimparForm"
        );


    if (btnLimpar) {

        btnLimpar.addEventListener(
            "click",
            function () {

                limparFormulario();

            }
        );

    }

}


function limparFormulario() {

    const form =
        document.getElementById(
            "formCadastroBanner"
        );


    if (form) {

        form.reset();

    }


    idBannerEmEdicao =
        null;


    removerImagemPreview();


    // Resetar título do formulário
    const tituloForm =
        document.getElementById(
            "tituloFormulario"
        );


    if (tituloForm) {

        tituloForm.innerHTML = `
            <i class="fa-solid fa-plus-circle"></i>
            Novo Banner
        `;

    }


    // Resetar botão principal
    const btnSalvar =
        document.getElementById(
            "btnSalvarBanner"
        );


    if (btnSalvar) {

        btnSalvar.innerHTML = `
            <i class="fa-solid fa-floppy-disk"></i>
            <span>Salvar Banner</span>
        `;

    }

}


//======================================================
// EDITAR BANNER (CARREGAR DADOS NO FORMULÁRIO)
//======================================================

function editarBanner(
    id
) {

    const banner =
        bannersCarregados.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!banner) {

        return;

    }


    idBannerEmEdicao =
        id;


    document.getElementById(
        "tituloBanner"
    ).value = banner.titulo;


    document.getElementById(
        "posicaoBanner"
    ).value = banner.posicao;


    document.getElementById(
        "statusBanner"
    ).value = banner.status;


    document.getElementById(
        "linkBanner"
    ).value = banner.link || "";


    document.getElementById(
        "dataInicio"
    ).value = banner.dataInicio || "";


    document.getElementById(
        "dataFim"
    ).value = banner.dataFim || "";


    // Carregar Preview da Imagem existente
    if (banner.imagem) {

        imagemBannerBase64 =
            banner.imagem;


        const imgPreview =
            document.getElementById(
                "imgPreviewBanner"
            );


        const previewContainer =
            document.getElementById(
                "previewImagemContainer"
            );


        const areaUpload =
            document.getElementById(
                "areaUploadBanner"
            );


        if (imgPreview) {

            imgPreview.src =
                banner.imagem;

        }


        if (previewContainer) {

            previewContainer.classList.remove(
                "hidden"
            );

        }


        if (areaUpload) {

            areaUpload.classList.add(
                "hidden"
            );

        }

    }


    // Alterar título e botão para Modo de Edição
    const tituloForm =
        document.getElementById(
            "tituloFormulario"
        );


    if (tituloForm) {

        tituloForm.innerHTML = `
            <i class="fa-solid fa-pen-to-square"></i>
            Editar Banner
        `;

    }


    const btnSalvar =
        document.getElementById(
            "btnSalvarBanner"
        );


    if (btnSalvar) {

        btnSalvar.innerHTML = `
            <i class="fa-solid fa-rotate"></i>
            <span>Atualizar Banner</span>
        `;

    }


    // Scroll suave até ao formulário
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );

}


//======================================================
// EXCLUIR BANNER
//======================================================

async function excluirBanner(
    id
) {

    if (confirm("Deseja realmente excluir este banner?")) {


        try {

            await fetch(
                `${API}/banners/${id}`,
                {
                    method: "DELETE"
                }
            );

        } catch (erro) {

            console.warn(
                "Servidor offline: exclusão local efetuada.",
                erro
            );

        }


        bannersCarregados =
            bannersCarregados.filter(
                function (item) {

                    return item.id !== id;

                }
            );


        renderizarTabelaBanners(
            bannersCarregados
        );

    }

}


//======================================================
// PESQUISA EM TEMPO REAL
//======================================================

function configurarPesquisa() {

    const input =
        document.getElementById(
            "inputBuscaBanner"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "input",
        function () {


            const termo =
                input.value
                    .toLowerCase()
                    .trim();


            const filtrados =
                bannersCarregados.filter(
                    function (item) {

                        return (
                            item.titulo
                                .toLowerCase()
                                .includes(termo) ||
                            item.posicao
                                .toLowerCase()
                                .includes(termo) ||
                            item.status
                                .toLowerCase()
                                .includes(termo)
                        );

                    }
                );


            renderizarTabelaBanners(
                filtrados
            );

        }
    );

}