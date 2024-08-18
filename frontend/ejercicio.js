window.onload = async () => {
    let productos = await getProductos();
    await mostrarProductos(productos);
    console.log(productos);
}

async function getProductos() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    let consutla = await fetch(url);
    let productoData = await consutla.json();
    console.log(productoData);
    let productos = productoData.results;
    return productos;
}

function mostrarProductos(productos) {
    let tabla = document.querySelector("#productoBody");
    productos.forEach(producto => {
        let fila = document.createElement("tr")
        fila.innerHTML += `  
            <td>${producto.title}</td>
            <td><a href="${producto.permalink}">Link</a></td>
            <td><img src="${producto.thumbnail}"></td>
            <td>${producto.price}$</td>  
        `;
        let boton = document.createElement("button")
        boton.onclick = () => {agregar(producto)};
        let td = document.createElement("td");
        boton.innerText = "Agregar";
        td.appendChild(boton);
        fila.appendChild(td);
        tabla.appendChild(fila);
    });
}

async function agregar(producto) {
    console.log(producto);
    let url = "http://localhost/APIMySql/backend/controlador.php?funcion=agregar";
    let formData = new FormData();
    let config = {
        method: 'POST',
        body: formData
    }
    let respuesta = await fetch(url, config);
    let rec = await respuesta.json();
    console.log(rec);
}