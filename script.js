let carrinho = [];

function adicionarAoCarrinho(item) {
  carrinho.push(item);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}
