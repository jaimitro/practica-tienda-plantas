//funcion retornar html una planta
// const plantasDB = [
//     {
//         id: "A001",
//         nombre: "Monstera Deliciosa",
//         imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
//         descripcion: "Planta tropical de grandes hojas verdes con agujeros.",
//         precio: 25.99,
//         stock: 15
//     },

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
    //
    articleEH.append(idEH, nombreEH, figureEH, descEH, precioEH, stockEH);

    return articleEH;
}

function pintarTodasPlantas(listaProductos, domElem) {
    for (let producto of listaProductos) {
        domElem.appendChild(retornaHTMLUnaPlanta(producto));
    }
}

