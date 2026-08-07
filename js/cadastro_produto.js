/* ==============================================
   ESTADO DA APLICAÇÃO E INICIALIZAÇÃO
============================================== */

document.addEventListener('DOMContentLoaded', () => {
    initFormEvents();
    initUploadEvents();
    initTagsEvents();
    initModalEvents();
});

/* ==============================================
   GERENCIAMENTO DOS MODAIS (CATEGORIA / MARCA)
============================================== */

const btnModalCategoria = document.getElementById('btnModalCategoria');
const btnModalMarca = document.getElementById('btnModalMarca');
const formNovaCategoria = document.getElementById('formNovaCategoria');
const formNovaMarca = document.getElementById('formNovaMarca');

function abrirModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function initModalEvents() {
    // Abrir Modais
    btnModalCategoria.addEventListener('click', () => abrirModal('modalCategoria'));
    btnModalMarca.addEventListener('click', () => abrirModal('modalMarca'));

    // Salvar Nova Categoria Dinamicamente
    formNovaCategoria.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputNome = document.getElementById('nomeNovaCategoria');
        const valor = inputNome.value.trim();

        if (valor) {
            const selectCategoria = document.getElementById('selectCategoria');
            const novaOpcao = document.createElement('option');
            novaOpcao.value = valor.toLowerCase().replace(/\s+/g, '_');
            novaOpcao.textContent = valor;
            novaOpcao.selected = true;

            selectCategoria.appendChild(novaOpcao);
            inputNome.value = '';
            fecharModal('modalCategoria');
        }
    });

    // Salvar Nova Marca Dinamicamente
    formNovaMarca.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputNome = document.getElementById('nomeNovaMarca');
        const valor = inputNome.value.trim();

        if (valor) {
            const selectMarca = document.getElementById('selectMarca');
            const novaOpcao = document.createElement('option');
            novaOpcao.value = valor.toLowerCase().replace(/\s+/g, '_');
            novaOpcao.textContent = valor;
            novaOpcao.selected = true;

            selectMarca.appendChild(novaOpcao);
            inputNome.value = '';
            fecharModal('modalMarca');
        }
    });
}

/* ==============================================
   TOGGLE DE STATUS (DISPONIBILIDADE)
============================================== */

const statusCheckbox = document.getElementById('statusAtivo');
const toggleText = document.getElementById('toggleText');

if (statusCheckbox && toggleText) {
    statusCheckbox.addEventListener('change', () => {
        toggleText.textContent = statusCheckbox.checked ? 'Ativo' : 'Inativo';
    });
}

/* ==============================================
   COMPATIBILIDADE DE VEÍCULOS (TAGS)
============================================== */

const compatibilidadeInput = document.getElementById('compatibilidadeInput');
const tagsList = document.getElementById('tagsList');

function initTagsEvents() {
    if (!compatibilidadeInput) return;

    compatibilidadeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tagText = compatibilidadeInput.value.trim();

            if (tagText !== '') {
                criarTag(tagText);
                compatibilidadeInput.value = '';
            }
        }
    });
}

function criarTag(texto) {
    const span = document.createElement('span');
    span.className = 'tag-chip';
    span.innerHTML = `
        ${texto}
        <i class="fa-solid fa-xmark" onclick="removeTag(this)"></i>
    `;
    tagsList.appendChild(span);
}

function removeTag(element) {
    element.parentElement.remove();
}

/* ==============================================
   PREVIEW DE UPLOAD DE IMAGENS
============================================== */

function initUploadEvents() {
    const dropzone = document.getElementById('dropzone');
    const inputImagens = document.getElementById('inputImagens');
    const previewContainer = document.getElementById('previewContainer');

    if (!dropzone || !inputImagens) return;

    dropzone.addEventListener('click', () => inputImagens.click());

    inputImagens.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.className = 'preview-thumb';
                    previewContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}

/* ==============================================
   VALIDAÇÃO DO FORMULÁRIO DE PRODUTO
============================================== */

function initFormEvents() {
    const productForm = document.getElementById('productForm');

    if (!productForm) return;

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomePeca = document.getElementById('nomePeca').value;
        const skuNumber = document.getElementById('skuNumber').value;

        if (!nomePeca || !skuNumber) {
            alert('Por favor, preencha os campos obrigatórios (Nome da Peça e SKU).');
            return;
        }

        alert('Produto salvo com sucesso!');
    });
}



//======================================================
// CADASTRO categorias
//======================================================

document.getElementById("btnSalvarCategoria").
    addEventListener("click", function () {
        //capturar os dados do input
        const categoriaNome
            = document.getElementById("nomeNovaCategoria").value;

        // criar um if para validar se o campo está vazio    
        if (categoriaNome === "") {
            alert("Por favor, preencha o nome da categoria.");
            return;
        }

        // criar um objeto com os dados da categoria
        const categoria = {
            nome: categoriaNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/categorias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoria)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Categoria cadastrada:", data);
                alert("Categoria cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar categoria:", error);
                alert("Erro ao cadastrar categoria.");
            });
    });


//======================================================
// CADASTRO MARCAS
//======================================================
