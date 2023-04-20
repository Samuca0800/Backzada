api.get('/vendedores')
.then(resp => {console.log(resp)})
.catch(err => {console.log(err)})
// Referências aos elementos HTML
const vendedoresList = document.getElementById("vendedores-list");
const vendasList = document.getElementById("vendas-list");
const novoVendedorForm = document.getElementById("novo-vendedor-form");
const novaVendaForm = document.getElementById("nova-venda-form");

// async function carregarVendedores() {
//   try {
//     const response = await fetch(`${API_URL}/vendedores`);
//     const vendedores = await response.json();

//     vendedoresList.innerHTML = "";

//     vendedores.forEach((vendedor) => {
//       const tr = document.createElement("tr");
//       tr.innerHTML = `
//         <td>${vendedor.nome}</td>
//         <td>${vendedor.email}</td>
//         <td>
//           <button class="editar-vendedor" data-id="${vendedor.id}">Editar</button>
//           <button class="excluir-vendedor" data-id="${vendedor.id}">Excluir</button>
//         </td>
//       `;
//       vendedoresList.appendChild(tr);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }


async function adicionarVendedor(event) {
  event.preventDefault();

  const nome = novoVendedorForm.nome.value;
  const email = novoVendedorForm.email.value;

  try {
    await fetch(`${API_URL}/vendedores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, email })
    });

    novoVendedorForm.reset();
    carregarVendedores();
  } catch (error) {
    console.log(error);
  }
}


async function carregarVendas() {
  try {
    const response = await fetch(`${API_URL}/vendas`);
    const vendas = await response.json();

    vendasList.innerHTML = "";

    vendas.forEach(async (venda) => {
      const vendedorResponse = await fetch(`${API_URL}/vendedores/${venda.vendedor_id}`);
      const vendedor = await vendedorResponse.json();

      const produtoResponse = await fetch(`${API_URL}/produtos/${venda.produto_id}`);
      const produto = await produtoResponse.json();

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${venda.data}</td>
        <td>${venda.quantidade}</td>
        <td>${vendedor.nome}</td>
        <td>${produto.nome}</td>
        <td>
          <button class="editar-venda" data-id="${venda.id}">Editar</button>
          <button class="excluir-venda" data-id="${venda.id}">Excluir</button>
        </td>
      `;
      vendasList.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}

// Função para adicionar uma nova venda
// async function adicionarVenda(event) {
//   event.preventDefault();

//   const vendedorId = novaVendaForm.vendedor.value;
//   const produtoId = novaVendaForm.produto.value;
//   const quantidade = novaVendaForm.quantidade.value;

//   try {
//     await fetch(`${API_URL}/vendas`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
