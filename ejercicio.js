 async function getProductos() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144#json";
    let consutla = await fetch(url);
    let productoData = await consutla.json();
    let productos = productoData.results;
    return productos;
    console.log(productos);

}


window.onload = async () => {
    let productos = await getProductos();
    console.log(productos);
}


function verProduto(productos){
    let listaProducto = document.querySelector("#producto");
    producto.forEach(productos => {
        listaProducto.innerHTML += `
        <tr class="">
                <td>Producto 1</td>
                <td><a href="#">Link 1</a></td>
                <td><img src="" alt="Producto 1"></td>
                <td>$100</td>
                <td><button onclick=>Agregar</button></td>
            </tr>
        `;
        
    });
    }