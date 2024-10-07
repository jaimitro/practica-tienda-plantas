//declaro valores iniciales
const plantasEH = document.querySelector(".plantas");
const listaCarritoEH = document.querySelector(".listaCarrito");
const carrito = [];

//___________________________FUNCIONES PLANTAS_____________________________________

function retornaHTMLUnaPlanta(producto) {
    const articleEH = document.createElement("article");
    articleEH.classList.add("planta");
    const idEH = document.createElement("div");
    idEH.textContent = producto.id;
    const nombreEH = document.createElement("div");
    nombreEH.textContent = producto.nombre;
    //figure con su img y figcaption
    const figureEH = document.createElement("figure");
    const imgEH = document.createElement("img");
    imgEH.src = producto.imagen;
    imgEH.classList.add("imgPlanta");
    const figcapionEH = document.createElement("figcaption");
    figcapionEH.textContent = producto.nombre;
    figureEH.append(imgEH, figcapionEH);
    //descripcion
    const descEH = document.createElement("p");
    descEH.textContent = producto.descripcion;
    //precio
    const precioEH = document.createElement("div");
    precioEH.textContent = producto.precio + "€";
    //stock    
    const stockEH = document.createElement("div");
    stockEH.textContent = producto.stock;
    //boton añadir a carrito
    const botonAddEH = document.createElement("div");
    botonAddEH.textContent = "Añadir al Carrito";
    botonAddEH.classList.add("botonAdd");
    botonAddEH.dataset = producto.id;
    botonAddEH.setAttribute("data-id", producto.id);
    botonAddEH.addEventListener("click", (event) => {
        // console.log(event.target.dataset.id);
        agregarProductoACarrito(event.target.dataset.id);
    });
    articleEH.append(idEH, nombreEH, figureEH, descEH, precioEH, stockEH, botonAddEH);
    return articleEH;
}

function pintarTodasPlantas(listaProductos, domElem) {
    domElem.innerHTML = "";
    for (let producto of listaProductos) {
        domElem.appendChild(retornaHTMLUnaPlanta(producto));
    }
}
//________________________________FUNCIONES CARRITO_______________________________________

function buscarPosEnArray(lista, id) {
    const resultadoPos = lista.findIndex(function (linea) {
        return linea.id === id;
    });
    return resultadoPos;
}

function pintarCarrito(carrito, domElem) {
    listaCarritoEH.innerHTML = "";
    for (let linea of carrito) {
        const lineaCompraEH = document.createElement("p");
        lineaCompraEH.textContent = `${linea.i} - ${linea.nombre}: ${linea.cantidad}x${linea.precio}€ = ${(linea.cantidad * linea.precio).toFixed(2)}€`;
        listaCarritoEH.appendChild(lineaCompraEH);
    }
    //TODO pintar suma total si hay cosas en el carrito
}

//añadir al array carrito la planta 
function agregarLineaArrayCarrito(idProducto) {
    //busco la pos de planta en plantasDB para mirar sus datos
    const posEnPlantasDB = buscarPosEnArray(plantasDB, idProducto);
    //miro si hay stock de la planta
    const hayStock = plantasDB[posEnPlantasDB].stock;
    //busco la posicion de la planta mediante el id en el carrito, si está le sumo 1
    //si no esta la añado como nueva linea
    if (hayStock > 0) {
        const posEnCarrito = buscarPosEnArray(carrito, idProducto);
        if (posEnCarrito === -1) {
            const producto = plantasDB[posEnPlantasDB];
            carrito.push({ id: producto.id, precio: producto.precio, cantidad: 1, nombre: producto.nombre });
        } else {
            carrito[posEnCarrito].cantidad++;
        }
        plantasDB[posEnPlantasDB].stock--;
    } else {
        alert("No hay stock de esta planta");
    }
}

function agregarProductoACarrito(idPlanta) {
    agregarLineaArrayCarrito(idPlanta);
    pintarCarrito(carrito, listaCarritoEH);
    //TODO tendria que cambiar solo las lineas que han cambiado su stock
    pintarTodasPlantas(plantasDB, plantasEH);
}