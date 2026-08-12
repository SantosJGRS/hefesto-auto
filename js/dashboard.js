// Aguarda o carregamento completo do DOM antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       NAVEGAÇÃO DO MENU LATERAL
    ========================================================== */
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Evita o comportamento padrão do link
            e.preventDefault();

            // Remove a classe 'active' de todos os itens
            menuItems.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });


    /* ==========================================================
       FILTRO DE VENDAS (Select)
    ========================================================== */
    const salesFilter = document.querySelector('.sales-panel select');
    
    if (salesFilter) {
        salesFilter.addEventListener('change', (e) => {
            const selectedOption = e.target.value;
            console.log(`Filtro de gráfico atualizado para: ${selectedOption}`);
            
            // Aqui você adicionaria a lógica para atualizar o gráfico SVG
            // Exemplo: fetchSalesData(selectedOption).then(updateChart);
        });
    }


    /* ==========================================================
       INTERAÇÕES DE BOTÕES E ALERTAS
    ========================================================== */
    
    // Botões de visualização na tabela de pedidos
    const tableButtons = document.querySelectorAll('.table-button');
    tableButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Pega o ID do pedido na mesma linha (primeiro TD)
            const orderId = e.target.closest('tr').querySelector('td').innerText;
            alert(`Abrindo detalhes do pedido: ${orderId}`);
        });
    });

    // Botão de alerta de estoque
    const dangerButton = document.querySelector('.danger-button');
    if (dangerButton) {
        dangerButton.addEventListener('click', () => {
            alert('Redirecionando para o painel de gerenciamento de estoque...');
        });
    }

    // Botão de notificação (sino) no cabeçalho
    const notificationButton = document.querySelector('.notification');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            const dot = notificationButton.querySelector('.notification-dot');
            if (dot) {
                // Esconde a bolinha de notificação após clicar
                dot.style.display = 'none';
            }
            alert('Você não tem novas notificações no momento.');
        });
    }

    // Ações Rápidas (Cards na parte inferior)
    const quickActions = document.querySelectorAll('.action-card');
    quickActions.forEach(action => {
        action.addEventListener('click', (e) => {
            e.preventDefault();
            const actionTitle = action.querySelector('h3').innerText;
            console.log(`Ação Rápida acionada: ${actionTitle}`);
        });
    });

    // Perfil (Dropdown simulado)
    const profileNode = document.querySelector('.profile');
    if (profileNode) {
        profileNode.addEventListener('click', () => {
            console.log('Abrindo menu de configurações do usuário...');
        });
    }

});