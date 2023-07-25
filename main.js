const todosLosProductos = [
    { nombre: "comboCorona", precio: 3600, imagen: "./img/corona-pack.jpg" },
    { nombre: "comboAndes", precio: 3000, imagen: "./img/andes-roja.jpg" },
    { nombre: "comboPatagonia", precio: 2000, imagen: "./img/cerveza patagonia.jpg" },
    { nombre: "comboQuilmes", precio: 1500, imagen: "./img/cerveza quilmes.jpg" },
]

let carrito = [];

function obtenerDatos() {
    const productosprox = todosLosProductos;
    productosprox.forEach((producto, index) => {
        document.querySelector(".divdisplay").innerHTML += `
            <div class="card imagen" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.precio} $</p>
                    <button class="btn btn-primary btn-comprar" data-index="${index}">Comprar</button>
                </div>
            </div>
        `;
    });

    const botonesComprar = document.querySelectorAll(".btn-comprar");
    botonesComprar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            const indexProducto = event.target.getAttribute("data-index");
            const productoSeleccionado = productosprox[indexProducto];

            carrito.push(productoSeleccionado);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            console.log("Producto agregado al carrito:", productoSeleccionado);

            alert(`${productoSeleccionado.nombre} agregado al carrito`)

        });
    });
}

obtenerDatos();




