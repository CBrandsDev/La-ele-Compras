import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="flex flex-col border-solid border-2 border-sky-500 w-48 my-2 pb-2" id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/img/${produtoCatalogo.imagem}.jpg" alt="Produto 1">
      <p class="marca">${produtoCatalogo.marca}</p>
      <p>${produtoCatalogo.nome}</p>
      <p>${produtoCatalogo.preco}</p>
      <button class="bg-slate-950 text-slate-200 "><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
