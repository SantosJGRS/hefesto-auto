/*         regras dos codigos...

   -acentos
   -espaço
   -simbolos
   -nao pode começar com números
   -não deve ser escrito com a primeira letra maiuscula*/

let preco_antigo= 120.50;
let preco_promocional= 85.43;
let quantidade= 10;
let desconto= "-15%";
let favorito= false;


/* variaveis contants */
const nomeProduto="kit de embreagem";
let avaliacoes;
const img_principal= "/assets/embreagem.png";
const descricao= "Kit de Embreagem Premium. O Kit de Embreagem Premium foi desenvolvido para oferecer máxima eficiência, durabilidade e desempenho ao sistema de transmissão do veículo. Produzido com materiais de alta qualidade e submetido a rigorosos padrões de fabricação, garante excelente capacidade de acoplamento, reduzindo vibrações e proporcionando trocas de marcha mais suaves e precisas.Ideal para reposição preventiva ou corretiva, o conjunto assegura maior confiabilidade na condução, contribuindo para o desempenho do veículo e para a preservação dos componentes da transmissão. Características:Alta resistência ao desgaste e ao calor;Excelente desempenho em diferentes condições de uso;Engates suaves e precisos;Maior vida útil dos componentes;Produto de qualidade e procedência garantidas.Conteúdo da embalagem: Disco de embreagem, platô e rolamento.Aplicação: Verifique a compatibilidade com o modelo, ano e motorização do seu veículo antes da compra." ;
let frete;
// botoes e arquivos.
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;


document.getElementById("imagem-maior").src = img_principal;









//                                                             novo mundo hahahhaha... <3

document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;
   


//                                                                 