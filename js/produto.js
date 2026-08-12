document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. GALERIA DE IMAGENS
    // ==========================================

    const thumbnails = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('#mainProductImage');

    if (mainImage && thumbnails.length > 0) {

        thumbnails.forEach(thumb => {

            thumb.addEventListener('click', () => {

                const imageUrl = thumb.dataset.image;

                if (!imageUrl) return;

                // Remove active das outras miniaturas
                thumbnails.forEach(item => {
                    item.classList.remove('active');
                });

                // Ativa a miniatura clicada
                thumb.classList.add('active');

                // Efeito de troca
                mainImage.style.opacity = '0';

                setTimeout(() => {
                    mainImage.src = imageUrl;
                    mainImage.style.opacity = '1';
                }, 120);

            });

        });

    }


    // ==========================================
    // 2. SELETOR DE QUANTIDADE
    // ==========================================

    const btnMinus = document.querySelector('.btn-minus');
    const btnPlus = document.querySelector('.btn-plus');
    const inputQuantity = document.querySelector(
        '.quantity-selector input'
    );

    if (btnMinus && btnPlus && inputQuantity) {

        // Diminuir
        btnMinus.addEventListener('click', () => {

            let value = parseInt(inputQuantity.value) || 1;

            if (value > 1) {
                value--;
            }

            inputQuantity.value = value;

        });


        // Aumentar
        btnPlus.addEventListener('click', () => {

            let value = parseInt(inputQuantity.value) || 1;

            if (value < 99) {
                value++;
            }

            inputQuantity.value = value;

        });


        // Impede valores inválidos
        inputQuantity.addEventListener('change', () => {

            let value = parseInt(inputQuantity.value) || 1;

            if (value < 1) {
                value = 1;
            }

            if (value > 99) {
                value = 99;
            }

            inputQuantity.value = value;

        });

    }


    // ==========================================
    // 3. SISTEMA DE ABAS
    // ==========================================

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length > 0 && tabPanels.length > 0) {

        tabButtons.forEach(button => {

            button.addEventListener('click', () => {

                const targetId = button.dataset.tab;

                // Remove active dos botões
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });

                // Remove active dos painéis
                tabPanels.forEach(panel => {
                    panel.classList.remove('active');
                });

                // Ativa botão
                button.classList.add('active');

                // Ativa painel correspondente
                const targetPanel =
                    document.getElementById(targetId);

                if (targetPanel) {
                    targetPanel.classList.add('active');
                }

            });

        });

    }


    // ==========================================
    // 4. BOTÃO COMPRAR
    // ==========================================

    const btnBuy = document.querySelector('.btn-buy');
    const cartBadge = document.querySelector('.cart-badge');

    if (btnBuy) {

        btnBuy.addEventListener('click', () => {

            const quantity =
                parseInt(inputQuantity?.value) || 1;

            atualizarCarrinho(quantity);

            const textoOriginal = btnBuy.innerHTML;

            btnBuy.innerHTML = `
                <i class="fa-solid fa-check"></i>
                ADICIONADO AO CARRINHO
            `;

            btnBuy.style.background = '#159447';

            mostrarMensagem(
                `${quantity} unidade(s) adicionada(s) ao carrinho!`
            );

            setTimeout(() => {

                btnBuy.innerHTML = textoOriginal;

                btnBuy.style.background = '';

            }, 1800);

        });

    }


    // ==========================================
    // 5. FAVORITO
    // ==========================================

    const btnFavorite =
        document.querySelector('.btn-favorite');

    if (btnFavorite) {

        btnFavorite.addEventListener('click', function () {

            const icon = this.querySelector('i');

            const favoritado =
                this.classList.contains('active');

            if (!favoritado) {

                this.classList.add('active');

                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');

                mostrarMensagem(
                    'Produto adicionado aos favoritos!'
                );

            } else {

                this.classList.remove('active');

                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');

                mostrarMensagem(
                    'Produto removido dos favoritos.'
                );

            }

        });

    }


    // ==========================================
    // 6. PRODUTOS RELACIONADOS
    // ==========================================

    const buttonsAddCart =
        document.querySelectorAll('.btn-add-cart');

    buttonsAddCart.forEach(button => {

        button.addEventListener('click', () => {

            atualizarCarrinho(1);

            const textoOriginal =
                button.innerHTML;

            button.innerHTML = `
                <i class="fa-solid fa-check"></i>
                Adicionado
            `;

            button.style.background = '#159447';

            mostrarMensagem(
                'Produto adicionado ao carrinho!'
            );

            setTimeout(() => {

                button.innerHTML =
                    textoOriginal;

                button.style.background = '';

            }, 1500);

        });

    });


    // ==========================================
    // 7. ATUALIZAR CARRINHO
    // ==========================================

    function atualizarCarrinho(quantidade) {

        if (!cartBadge) return;

        let valorAtual =
            parseInt(cartBadge.textContent) || 0;

        valorAtual += parseInt(quantidade) || 0;

        cartBadge.textContent = valorAtual;

    }


    // ==========================================
    // 8. MENSAGEM
    // ==========================================

    function mostrarMensagem(mensagem) {

        const mensagemAntiga =
            document.querySelector('.toast');

        if (mensagemAntiga) {
            mensagemAntiga.remove();
        }

        const toast =
            document.createElement('div');

        toast.className = 'toast success';

        toast.textContent = mensagem;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {

            toast.classList.remove('show');

            setTimeout(() => {
                toast.remove();
            }, 300);

        }, 2500);

    }


    // ==========================================
    // 9. ZOOM DA IMAGEM
    // ==========================================

    const zoomButton =
        document.querySelector('.image-zoom');

    if (zoomButton && mainImage) {

        zoomButton.addEventListener('click', () => {

            abrirImagem(mainImage.src);

        });

    }


    // Também permite dar duplo clique na imagem
    if (mainImage) {

        mainImage.addEventListener('dblclick', () => {

            abrirImagem(mainImage.src);

        });

    }


    // ==========================================
    // 10. MODAL DA IMAGEM
    // ==========================================

    function abrirImagem(src) {

        const modalExistente =
            document.querySelector('.image-modal');

        if (modalExistente) {
            modalExistente.remove();
        }

        const modal =
            document.createElement('div');

        modal.className =
            'image-modal active';

        modal.innerHTML = `
            <button
                type="button"
                class="image-modal-close"
                aria-label="Fechar imagem"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

            <img
                src="${src}"
                alt="Imagem ampliada do produto"
            >
        `;

        document.body.appendChild(modal);


        // Fechar no botão X
        const closeButton =
            modal.querySelector(
                '.image-modal-close'
            );

        closeButton.addEventListener('click', () => {
            modal.remove();
        });


        // Fechar clicando fora
        modal.addEventListener('click', event => {

            if (event.target === modal) {
                modal.remove();
            }

        });


        // Fechar com ESC
        const fecharComEsc = event => {

            if (event.key === 'Escape') {

                modal.remove();

                document.removeEventListener(
                    'keydown',
                    fecharComEsc
                );

            }

        };

        document.addEventListener(
            'keydown',
            fecharComEsc
        );

    }


    // ==========================================
    // 11. PESQUISA
    // ==========================================

    const searchInput =
        document.querySelector('.search-bar input');

    const searchButton =
        document.querySelector('.btn-search');

    if (searchInput && searchButton) {

        function pesquisar() {

            const texto =
                searchInput.value.trim();

            if (!texto) {

                mostrarMensagem(
                    'Digite algo para pesquisar.'
                );

                searchInput.focus();

                return;
            }

            mostrarMensagem(
                `Pesquisando por "${texto}"...`
            );

        }


        searchButton.addEventListener(
            'click',
            pesquisar
        );


        searchInput.addEventListener(
            'keydown',
            event => {

                if (event.key === 'Enter') {
                    pesquisar();
                }

            }
        );

    }


    // ==========================================
    // 12. CEP
    // ==========================================

    const shippingInput =
        document.querySelector(
            '.shipping-form input'
        );

    const shippingButton =
        document.querySelector(
            '.shipping-form button'
        );

    if (shippingInput && shippingButton) {

        shippingInput.addEventListener(
            'input',
            () => {

                let cep =
                    shippingInput.value
                        .replace(/\D/g, '');

                cep = cep.substring(0, 8);

                if (cep.length > 5) {

                    cep =
                        cep.substring(0, 5)
                        + '-'
                        + cep.substring(5);

                }

                shippingInput.value = cep;

            }
        );


        shippingButton.addEventListener(
            'click',
            () => {

                const cep =
                    shippingInput.value
                        .replace(/\D/g, '');

                if (cep.length !== 8) {

                    mostrarMensagem(
                        'Digite um CEP válido.'
                    );

                    shippingInput.focus();

                    return;
                }

                mostrarMensagem(
                    'Frete consultado com sucesso!'
                );

            }
        );

    }

});