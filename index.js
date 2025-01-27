import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verficiarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click",  (evento) => {
    evento.preventDefault() //previne o comportamento padrão de atualização de tela de um formulário
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);    
    verificarListaVazia(listaDeCompras)
})

verificarListaVazia(listaDeCompras);



/*/// Formatação avançada para mostrar o nome completo do mês e o ano

const datanovo = new Date();
const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
const dataAvancada = datanovo.toLocaleDateString('pt-BR', opcoes);
console.log(dataAvancada); 

// Exemplo de saída: "5 de outubro de 2023"*/


