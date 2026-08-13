// Dados fixos simulando perfeitamente o print enviado
const clientesMock = [
    {
        id: "#1024",
        nome: "Ana Silva",
        email: "ana.silva@email.com",
        telefone: "(11) 98765-4321",
        status: "ativo",
        corAvatar: "blue"
    },
    {
        id: "#1025",
        nome: "Carlos Souza",
        email: "carlos.s@empresa.com",
        telefone: "(11) 91234-5678",
        status: "inativo",
        corAvatar: "purple"
    },
    {
        id: "#1026",
        nome: "Roberto Almeida",
        email: "roberto@oficina.com.br",
        telefone: "(21) 99988-7766",
        status: "ativo",
        corAvatar: "orange"
    },
    {
        id: "#1027",
        nome: "Juliana Costa",
        email: "ju.costa@email.com",
        telefone: "(31) 97766-5544",
        status: "ativo",
        corAvatar: "green"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    renderizarTabela(clientesMock);
    configurarBusca();
});

// Função para pegar as iniciais do nome para o Avatar (ex: Ana Silva -> AS)
function getIniciais(nome) {
    const partes = nome.split(" ");
    if (partes.length >= 2) {
        return (partes[0][0] + partes[1][0]).toUpperCase();
    }
    return nome.substring(0, 2).toUpperCase();
}

function renderizarTabela(dados) {
    const tbody = document.getElementById("tabelaClientes");
    tbody.innerHTML = "";

    if (dados.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: var(--text-secondary);">
                    Nenhum cliente encontrado.
                </td>
            </tr>
        `;
        return;
    }

    dados.forEach(cliente => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td style="color: var(--text-secondary);">${cliente.id}</td>
            <td>
                <div class="client-info-cell">
                    <div class="client-avatar ${cliente.corAvatar}">
                        ${getIniciais(cliente.nome)}
                    </div>
                    <div class="client-details">
                        <span class="client-name">${cliente.nome}</span>
                        <span class="client-email">${cliente.email}</span>
                    </div>
                </div>
            </td>
            <td>${cliente.telefone}</td>
            <td>
                <span class="status-badge ${cliente.status}">
                    ${cliente.status.charAt(0).toUpperCase() + cliente.status.slice(1)}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" title="Editar">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn-icon delete" title="Excluir">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function configurarBusca() {
    const inputBusca = document.getElementById("inputBusca");
    
    inputBusca.addEventListener("input", (e) => {
        const termo = e.target.value.toLowerCase().trim();
        
        const filtrados = clientesMock.filter(c => 
            c.nome.toLowerCase().includes(termo) || 
            c.email.toLowerCase().includes(termo)
        );
        
        renderizarTabela(filtrados);
    });
}