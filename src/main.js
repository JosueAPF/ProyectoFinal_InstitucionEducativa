import { filtrarPorCategoria } from "./Cursos.js";
import { CategoriaStyle, EstilosCategoriaItem } from "./Estilos.js";

const Contenedro_Cursos = document.getElementById("Listado-Productos");
let CursosTarjetas;


/*Elementos del Modal*/
const cerrar_ = document.getElementById('cerrar')
const modal_ = document.getElementById('modal')
const Modal_Titulo = document.getElementById("TituloProducto");
/*etiqutas Hijas del Modal */
const TituloProductos = document.getElementById("TituloProducto");
const IMG_Productos = document.getElementById("ImgProductos");
const PrecioCurso = document.getElementById("precioP");
const CategoriaCurso = document.getElementById("categoriaP");
const HorarioCurso = document.getElementById("HorarioP");
const DiaCurso = document.getElementById("DiaP");
const DescriptcionCurso = document.getElementById("Descripcion");


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
        CursosTarjetas = document.querySelectorAll(".productos");
        itemDiv.innerHTML = `
            <h3>${Item.producto}</h3>
            <img src="${Item.img}" alt="${Item.producto}">
            <p>Precio: Q${Item.precio}</p>
            <p id="TarjetaCategoria">Categoría: ${Item.categoria}</p>
            <p class="hidden">Horario: ${Item.horario}</p>
            <p>Día: ${Item.dia}</p>
            <p class="hidden">Descripcion : ${Item.descripcion}</p>
            
        `;
        Contenedro_Cursos.appendChild(itemDiv);
    }
    //evento para el los Items(Cursos)
    CursosTarjetas = document.querySelectorAll(".productos");
    CursosTarjetas.forEach(curso => {
        EstilosCategoriaItem(curso)//aplicando estilo a el parafo de categoria al item de cursos
        curso.addEventListener('click', () => {
            console.log("imagen",curso.childNodes[3].src) 
            TituloProductos.textContent = curso.childNodes[1].textContent
            IMG_Productos.src = curso.childNodes[3].src
            PrecioCurso.textContent = curso.childNodes[5].textContent
            CategoriaCurso.textContent = curso.childNodes[7].textContent
            HorarioCurso.textContent = curso.childNodes[9].textContent
            DiaCurso.textContent = curso.childNodes[11].textContent
            DescriptcionCurso.textContent = curso.childNodes[13].textContent
            /*
            console.log(curso.childNodes[1].textContent)
            console.log(curso.childNodes[3]) imagen
            console.log(curso.childNodes[5])
            console.log(curso.childNodes[7])
            console.log(curso.childNodes[9])
            console.log(curso.childNodes[11])
            console.log(curso.childNodes[13])*/

            modal_.showModal()
            CategoriaStyle(CategoriaCurso.textContent);
        });
    });
}

document.getElementById("category-select").onchange = function () {
    const selectedCategory = this.value;
    FiltradosCategorias(selectedCategory);
};

cerrar_.addEventListener('click', () => {
    modal_.close()
})



document.addEventListener('DOMContentLoaded', () => {
    // Método 1: Seleccionar por los href específicos
    const menuLinks = {
        cursos: document.querySelector('a[href="#cursos"]'),
        test: document.querySelector('a[href="#Test"]'),
        contacto: document.querySelector('a[href="#contacto"]')
    };

    menuLinks.cursos.addEventListener('click', () => {
        console.log("hola");
    })

    menuLinks.test.addEventListener('click', () => {
        console.log("hola");
    })

    menuLinks.contacto.addEventListener('click', () => {
        console.log("hola");
    })

});