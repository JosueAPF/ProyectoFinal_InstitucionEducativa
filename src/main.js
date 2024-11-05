import { filtrarPorCategoria } from "./Cursos.js";

const Contenedro_Cursos = document.getElementById("Listado-Productos");

console.log(Contenedro_Cursos)

function LimpiarContenedor() {
    Contenedro_Cursos.innerHTML = "";
}



function FiltradosCategorias(categoria) {
    //filtrarPorCategoria(categoria)
    LimpiarContenedor();
    const elementosFiltrados = filtrarPorCategoria(categoria);
    for (let i = 0; i < elementosFiltrados.length; i++) {
        const Item = elementosFiltrados[i];
        const itemDiv = document.createElement("div");
        itemDiv.className = "productos";
        itemDiv.innerHTML = `
            <h3>${Item.producto}</h3>
            <img src="${Item.img}" alt="${Item.producto}">
            <p>Precio: Q${Item.precio}</p>
            <p>Categoría: ${Item.categoria}</p>
            <p>Horario: ${Item.horario}</p>
            <p>Día: ${Item.dia}</p>
        
        `;
        Contenedro_Cursos.appendChild(itemDiv);
    }
}
//FiltradosCategorias("Seguridad");


document.getElementById("category-select").onchange = function () {
    const selectedCategory = this.value;
    FiltradosCategorias(selectedCategory);
};