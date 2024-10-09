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
    botonAddEH.classList.add("botonBase");
    //dateset funciona usando el setattribute porque le digo que hay un data-loquesea
    //en este caso data-id donde guardo el id de la planta en el boton
    botonAddEH.dataset = producto.id;
    botonAddEH.setAttribute("data-id", producto.id);
    botonAddEH.addEventListener("click", (event) => {
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
//________________________________FUNCIONES CARRITO______________________________________

//funcion MUY IMPORTANTE: como saber en que posicion se encuentra en el array que le paso
//en funcion del id que le digo, ya que tanto carrito como plantasDB guardan el id
//Lo mismo me he flipado y hay otra manera pero mola así
function buscarPosEnArray(lista, id) {
    const resultadoPos = lista.findIndex(function (linea) {
        return linea.id === id;
    });
    return resultadoPos;
}

//Funcion añadir al array carrito la planta, OJO -> NO pinta 
function agregarLineaArrayCarrito(idProducto) {
    const posEnPlantasDB = buscarPosEnArray(plantasDB, idProducto);//busco la pos de planta en plantasDB para mirar sus datos
    const hayStock = plantasDB[posEnPlantasDB].stock;//miro si hay stock de la planta
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
        //tanto si añado nueva linea como si añado cantidad a una linea -> restar al stock plantasDB
        plantasDB[posEnPlantasDB].stock--;

    } else {
        alert("No hay stock de esta planta");
    }
}

//Funcion para sumar el valor de todo el carrito y devolver valor
function sumarCarrito(carrito) {
    const sumaTotal = carrito.reduce((acum, linea) => {
        return acum += (linea.cantidad * linea.precio);
    }, 0);
    return Number(sumaTotal).toFixed(2);//fijo a 2 decimales
}

//funcion PINTAR <div> carrito
function pintarCarrito(carrito, domElem) {
    domElem.innerHTML = "";
    if (carrito.length > 0) {//si no hay lineas en carro no gasto proceso para pintar NADA
        for (let linea of carrito) {
            //div con la linea entera de la planta incluidos los botones
            const lineaCarritoEH = document.createElement("div");

            const lineaPlantaYValoresEH = document.createElement("p");
            lineaPlantaYValoresEH.classList.add("lineaCarrito");
            lineaPlantaYValoresEH.textContent = `${linea.id} - ${linea.nombre}: ${linea.cantidad}x${linea.precio}€ = ${(linea.cantidad * linea.precio).toFixed(2)}€`;

            const botonMenosEH = document.createElement("div");
            botonMenosEH.textContent = " - ";
            //se podria usar setAttribute("id",linea.id) usando el atributo
            //existente id pero no creo que sea profesional, recuerda dataset necesita del
            //atributo en html data-loquesea, luego se le llama con dataset.id (sin el data- delante)
            botonMenosEH.setAttribute("data-id", linea.id);
            botonMenosEH.dataset = linea.id;
            botonMenosEH.classList.add("botonBase");
            botonMenosEH.addEventListener("click", restarUnaPlanta);

            const botonMasEH = document.createElement("div");
            botonMasEH.textContent = " + ";
            botonMasEH.dataset = linea.id;
            botonMasEH.setAttribute("data-id", linea.id);
            botonMasEH.classList.add("botonBase");
            botonMasEH.addEventListener("click", sumarUnaPlanta);

            const botonQuitarEH = document.createElement("div");
            botonQuitarEH.textContent = " Eliminar ";
            botonQuitarEH.dataset = linea.id;
            botonQuitarEH.setAttribute("data-id", linea.id);
            botonQuitarEH.classList.add("botonBase");
            botonQuitarEH.addEventListener("click", quitarPlanta);

            lineaCarritoEH.append(lineaPlantaYValoresEH, botonMenosEH, botonMasEH, botonMenosEH, botonMasEH, botonQuitarEH);
            domElem.appendChild(lineaCarritoEH);
        }
        //despues de todas las lineas añado la suma total

        const sumaTotalEH = document.createElement("div");
        sumaTotalEH.classList.add("sumaTotal");
        sumaTotalEH.textContent = sumarCarrito(carrito) + "€";//funcion que suma todo el carrito
        domElem.appendChild(sumaTotalEH);//finalmente pinto la suma abajo del carrito
    }
}

//Funcion llama a las anteriores y que es llamada por listener del boton "Añadir al Carrito"
function agregarProductoACarrito(idPlanta) {
    agregarLineaArrayCarrito(idPlanta);
    pintarCarrito(carrito, listaCarritoEH);
    //TODO quiza tendria que cambiar solo las lineas que han cambiado su
    //stock en vez de pintar todo otra vez, ver como hacer
    pintarTodasPlantas(plantasDB, plantasEH);
}

//funcion sumar +1 a una planta que ya esta en el carrito si es que queda stock en plantasDB
function sumarUnaPlanta(event) {
    const id = event.target.dataset.id;//no es necesario pero es mas corto asi
    const posEnPlantasDB = buscarPosEnArray(plantasDB, id);//busco la pos de planta en plantasDB para mirar sus datos
    const hayStock = plantasDB[posEnPlantasDB].stock;//miro si hay stock de la planta
    const posEnCarrito = buscarPosEnArray(carrito, id);//busco la pos en el carrito de la planta
    if (hayStock > 0) {//sumar a la linea array carrito y restar al stock de plantasDB
        carrito[posEnCarrito].cantidad++;
        plantasDB[posEnPlantasDB].stock--;
        pintarCarrito(carrito, listaCarritoEH);
        pintarTodasPlantas(plantasDB, plantasEH);
    } else {
        alert("No queda stock de " + plantasDB[posEnPlantasDB].nombre);
    }
}

//funcion restar -1 a una planta que ya esta en el carrito
function restarUnaPlanta(event) {
    const id = event.target.dataset.id;
    const posEnPlantasDB = buscarPosEnArray(plantasDB, id);
    const posEnCarrito = buscarPosEnArray(carrito, id);
    if (carrito[posEnCarrito].cantidad > 1) {
        carrito[posEnCarrito].cantidad--;
        plantasDB[posEnPlantasDB].stock++;
    } else {
        quitarPlanta(event);
    }
    pintarCarrito(carrito, listaCarritoEH);
    pintarTodasPlantas(plantasDB, plantasEH);
}

//funcion quitar una planta que ya esta en el carrito indiferentemente de la cantidad
function quitarPlanta(event) {
    const id = event.target.dataset.id;
    const posEnPlantasDB = buscarPosEnArray(plantasDB, id);
    const posEnCarrito = buscarPosEnArray(carrito, id);
    const cantidad = carrito[posEnCarrito].cantidad;
    console.log("cantidad en linea carrito", cantidad);
    console.log("Stock en planta: ", plantasDB[posEnPlantasDB].stock);
    plantasDB[posEnPlantasDB].stock += cantidad;
    carrito.splice(posEnCarrito, 1);
    pintarCarrito(carrito, listaCarritoEH);
    pintarTodasPlantas(plantasDB, plantasEH);
}

const botonVaciarCarritoEH = document.querySelector(".botonVaciarCarrito");
botonVaciarCarritoEH.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    if (carrito.length > 0) {
        for (let linea of carrito) {
            const posEnPlantasDB = buscarPosEnArray(plantasDB, linea.id);
            plantasDB[posEnPlantasDB].stock += linea.cantidad;
        }
        carrito.splice(0, carrito.length);
        pintarCarrito(carrito, listaCarritoEH);
        pintarTodasPlantas(plantasDB, plantasEH);
    } else {
        alert("No hay nada que vaciar")
    }
}

const botonProcederEH = document.querySelector(".botonProceder");
botonProcederEH.addEventListener("click", (event) => {
    if (carrito.length > 0) {
        alert("Se han comprado correctamente los siguiente productos:\n" + listaCarritoEH.textContent);
        listaCarritoEH.textContent = "";
    } else {
        alert("No hay nada que comprar en la lista");
    }
})

//TODO filtros precios, hay stock y nombre