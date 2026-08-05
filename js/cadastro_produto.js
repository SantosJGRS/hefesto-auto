/* =========================================
   cadastro_produto.js
   ========================================= */

// Aguarda o HTML carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DO BOTÃO "ACTIVE" (TOGGLE SWITCH)
    // ==========================================
    const toggleBtn = document.getElementById('toggle-active');
    
    if (toggleBtn) {
        const toggleDot = toggleBtn.querySelector('div');
        let isActive = true; // Estado inicial igual ao da imagem (Ativo)

        toggleBtn.addEventListener('click', () => {
            isActive = !isActive; // Inverte o estado
            
            if (isActive) {
                // Fica Vermelho (Ativo)
                toggleBtn.classList.replace('bg-gray-600', 'bg-brandRed');
                // Move a bolinha para a direita
                toggleDot.classList.replace('right-5', 'right-1');
            } else {
                // Fica Cinza (Inativo)
                toggleBtn.classList.replace('bg-brandRed', 'bg-gray-600');
                // Move a bolinha para a esquerda
                toggleDot.classList.replace('right-1', 'right-5'); 
            }
        });
    }

    // ==========================================
    // 2. REMOVER TAGS DE VEÍCULOS
    // ==========================================
    const removeTagBtns = document.querySelectorAll('.fa-xmark');
    
    removeTagBtns.forEach(btn => {
        // Evita remover o ícone do modal que também usa fa-xmark
        if (!btn.closest('#modal-adicionar')) {
            btn.addEventListener('click', (e) => {
                const tag = e.target.closest('span');
                if (tag) {
                    tag.remove();
                }
            });
        }
    });

    // ==========================================
    // 3. AÇÕES DOS BOTÕES SALVAR E CANCELAR
    // ==========================================
    const btnSave = document.getElementById('btn-save');
    const btnCancel = document.getElementById('btn-cancel');
    const formProduto = document.getElementById('form-produto');

    // Ação do Botão "Salvar Produto"
    if (btnSave) {
        btnSave.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que a página recarregue ao clicar
            
            const nomePeca = document.getElementById('nome_peca').value;
            
            if (nomePeca.trim() === '') {
                alert("Por favor, preencha pelo menos o Nome da Peça para testar o salvamento.");
                return;
            }

            console.log("Dados prontos para envio ao servidor.");
            alert(`Sucesso! O produto "${nomePeca}" foi salvo (Simulação).`);
        });
    }

    // Ação do Botão "Cancelar"
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            const confirmar = confirm("Tem certeza que deseja cancelar? Todos os dados digitados serão perdidos.");
            
            if (confirmar) {
                formProduto.reset(); 
            }
        });
    }

    // ==========================================
    // 4. LÓGICA DO MODAL (ADICIONAR CATEGORIA E MARCA)
    // ==========================================
    const modal = document.getElementById('modal-adicionar');
    const modalTitulo = document.getElementById('modal-titulo');
    const inputNovoItem = document.getElementById('input-novo-item');
    const btnFecharModal = document.getElementById('btn-fechar-modal');
    const btnCancelarModal = document.getElementById('btn-cancelar-modal');
    const btnSalvarModal = document.getElementById('btn-salvar-modal');
    
    let tipoAtual = ''; // Guarda se estamos mexendo em 'categoria' ou 'marca'

    // Função global chamada pelo botão "+" no HTML
    window.abrirModal = function(tipo) {
        tipoAtual = tipo;
        
        // Altera os textos dependendo de qual botão clicou
        if (tipo === 'categoria') {
            modalTitulo.innerText = 'Nova Categoria';
            inputNovoItem.placeholder = 'Ex: Suspensão';
        } else {
            modalTitulo.innerText = 'Nova Marca';
            inputNovoItem.placeholder = 'Ex: Michelin';
        }
        
        inputNovoItem.value = ''; // Limpa o input
        
        // Mostra o modal na tela
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Foca no campo de texto automaticamente
        setTimeout(() => inputNovoItem.focus(), 100); 
    };

    // Função para fechar o modal
    function fecharModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    // Eventos para fechar o modal
    if (btnFecharModal) btnFecharModal.addEventListener('click', fecharModal);
    if (btnCancelarModal) btnCancelarModal.addEventListener('click', fecharModal);

    // Fecha se apertar a tecla "Esc"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            fecharModal();
        }
    });

    // Salvar o novo item digitado no Modal
    if (btnSalvarModal) {
        btnSalvarModal.addEventListener('click', () => {
            const novoValor = inputNovoItem.value.trim();
            
            if (novoValor !== '') {
                // Pega o select correspondente (id="categoria" ou id="marca")
                const selectAlvo = document.getElementById(tipoAtual);
                
                // Cria uma nova opção HTML
                const novaOption = document.createElement('option');
                novaOption.value = novoValor;
                novaOption.textContent = novoValor;
                
                // Adiciona na lista e já deixa selecionado
                selectAlvo.appendChild(novaOption);
                selectAlvo.value = novoValor; 
                
                fecharModal(); // Fecha o modal
            } else {
                alert('Por favor, digite um nome válido.');
            }
        });
    }

});