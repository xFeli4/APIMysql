 async function getProductos() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    let consutla = await fetch(url);
    let productoData = await consutla.json();
    let productos = productoData.results;
    console.log(productoData);
    return productos;
}


window.onload = async () => {
    let productos = await getProductos();
    console.log(productos);
}


function verProduto(producto){
    let productoBody = document.querySelector("#productoBody");
    productoBody.forEach(productos => {
        productoBody.innerHTML += `
            <tr class="">
                <td>${productos.Titulo}</td>
                <td><a href="${productos.Link}"></a>Link</td>
                <td><img src="${productos.IMG}"></td>
                <td>${productos.Price}</td>
            </tr>
        `;
  
    });
    }