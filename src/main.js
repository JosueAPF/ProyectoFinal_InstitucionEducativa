import { filtrarPorCategoria, verRutaPorId } from "./Cursos.js";
import { CategoriaStyle, EstilosCategoriaItem } from "./Estilos.js";

const Contenedro_Cursos = document.getElementById("Listado-Productos");
let SeccionCursos = document.getElementById("Seccioncursos")
let SeccionTest = document.getElementById("SeccionTest")
let SeccionNosotros = document.getElementById("SeccionContactos")
let SeccionPrincipal = document.getElementById("SeccionPrincipal")
let SeccionRutas_Curso = document.getElementById("SeccionRutaCurso")
let SeccionFormularioEmail = document.getElementById("SeccionFormulario")
let DivFormularioEmail = document.getElementById("divForm");



let NombreParticipante = document.getElementById("participante");
let inputCurso = document.getElementById("Nombre_Curso");
let inputId = document.getElementById("id_Curso");
let inputDia = document.getElementById("dia_curso");
let inputHorario = document.getElementById("Horario_curso");
let inputPrecio = document.getElementById("Precio_curso");
let inputDescripcion = document.getElementById("Descripcion_curso")
let EmailAlumno = document.getElementById("AlumnoEmail")


let Seccion_CredencialesEstudiante = document.getElementById("SeccionPrincipal_Credenciales");
let DatosCurso = [];
let CursosTarjetas;
let obtenerId = 0;


/*Elementos del Modal*/
const cerrar_ = document.getElementById('cerrar_Modal')
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
const id = document.getElementById("id_curso");
//boton de asinacion a cursos que esta dentro del moda-
//const BotonAsignarme = document.getElementById("BTN_Asignar");


/*inicio Apartado Cursos*/

function LimpiarContenedor() {
    Contenedro_Cursos.innerHTML = "";
    DivFormularioEmail.classList.add("oculto")
}

/*
//metodo para gurdar los datos del curso en un json
async function cargarDatos() {
    try {
        const respuesta = await fetch('./data/cursos.json');
        // Supongamos que los datos vienen de este JSON 
        const datos = await respuesta.json(); return datos;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        return [];
    }
}*/


//filtrando por categorias uso de filter para el diccionario y en conjunto con el combobox
function FiltradosCategorias(categoria) {
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
            <p class="hidden">id:${Item.id}</p>
            
        `;
        Contenedro_Cursos.appendChild(itemDiv);
    }
    //evento para el los Items(Cursos)
    CursosTarjetas = document.querySelectorAll(".productos");
    CursosTarjetas.forEach(curso => {
        DatosCurso.length = 0; //limpiando el array por cada iteracion nueva
        EstilosCategoriaItem(curso)//aplicando estilo a el parafo de categoria al item de cursos
        curso.addEventListener('click', () => {
            console.log("imagen", curso.childNodes[3].src)
            TituloProductos.textContent = curso.childNodes[1].textContent
            IMG_Productos.src = curso.childNodes[3].src
            PrecioCurso.textContent = curso.childNodes[5].textContent
            CategoriaCurso.textContent = curso.childNodes[7].textContent
            HorarioCurso.textContent = curso.childNodes[9].textContent
            DiaCurso.textContent = curso.childNodes[11].textContent
            DescriptcionCurso.textContent = curso.childNodes[13].textContent
            id.textContent = curso.childNodes[15].textContent;
            //console.log("id aqui", id.textContent)

            DatosCurso = [
                TituloProductos.textContent,
                PrecioCurso.textContent,
                CategoriaCurso.textContent,
                HorarioCurso.textContent,
                DiaCurso.textContent,
                DescriptcionCurso.textContent,
                id.textContent,
                IMG_Productos.src

            ];

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


//por problemas en las tarjetas/cursos se reinicia el combobox
function resetCombobox() {
    const combobox = document.querySelector('#category-select');
    combobox.selectedIndex = combobox.childNodes[1];
}

//selector de Categorias toma la categoria y la manda a el filter
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("category-select").onchange = function () {
        const selectedCategory = this.value;
        FiltradosCategorias(selectedCategory);
        //ocultar el apartado de las rutas
        SeccionRutas_Curso.classList.add("oculto")

    };
});

cerrar_.addEventListener('click', (event) => {
    event.preventDefault()
    modal_.close()

});


//>>>>>>>>>>>>>>-todos los eventos de los navs/Rutas/Botones de navegacion/Modal/dialog

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = {
        cursos: document.querySelector('a[href="#cursos"]'),
        test: document.querySelector('a[href="#Test"]'),
        contacto: document.querySelector('a[href="#contacto"]'),
        Modal: document.getElementsByTagName("dialog"),
        boton_Credenciales: document.querySelector("#BotonCredenciales"),
        Boton_menu1: document.querySelectorAll("li"),
        Usuario: document.getElementById("inputUser"),
        Pass: document.getElementById("inputPass"),
        BtN_Email: document.getElementById("BTN_Mandar_Solicitud")
    };


    menuLinks.boton_Credenciales.addEventListener('click', (event) => {
        const div = document.getElementById("SeccionPrincipal_Credenciales");
        event.preventDefault()
        console.log(menuLinks.Usuario.value, menuLinks.Pass.value)
        if (menuLinks.Usuario.value === "alumno" && menuLinks.Pass.value === "2024") {
            console.log("completo")
            SeccionPrincipal.classList.remove("hidden")
            Seccion_CredencialesEstudiante.classList.add("oculto")
            menuLinks.Boton_menu1[0].classList.remove("oculto")
            menuLinks.Boton_menu1[1].classList.remove("oculto")
            menuLinks.Boton_menu1[2].classList.remove("oculto")
            DivFormularioEmail.classList.add("oculto")




        } else {
            console.log("Error")
            menuLinks.Usuario.value = ""
            menuLinks.Pass.value = ""
            alert("Error de Credenciales No esta registrado")
        }
        /*
        console.log(Seccion_CredencialesEstudiante.childNodes[1].childNodes[1].childNodes[1])
        console.log(Seccion_CredencialesEstudiante.childNodes[1].childNodes[3].childNodes[1])
        */
    })

    menuLinks.cursos.addEventListener('click', (event) => {
        SeccionRutas_Curso.classList.add("oculto")
        event.preventDefault()
        console.log("cursos");
        SeccionCursos.classList.remove('hidden');
        SeccionTest.classList.add("hidden")
        SeccionNosotros.classList.add("hidden")
        SeccionPrincipal.classList.add("hidden")
        DivFormularioEmail.classList.add("oculto")



    })

    menuLinks.test.addEventListener('click', () => {
        SeccionRutas_Curso.classList.add("oculto")
        console.log("test");
        SeccionTest.classList.remove("hidden")
        SeccionCursos.classList.add('hidden');
        SeccionNosotros.classList.add("hidden")
        SeccionPrincipal.classList.add("hidden")
        DivFormularioEmail.classList.add("oculto")


    })

    menuLinks.contacto.addEventListener('click', () => {
        SeccionRutas_Curso.classList.add("oculto")
        console.log("contactos");
        SeccionCursos.classList.add('hidden');
        SeccionNosotros.classList.remove("hidden")
        SeccionPrincipal.classList.add("hidden")
        SeccionTest.classList.add("hidden")
        DivFormularioEmail.classList.add("oculto")

    })
    /*
    menuLinks.BtN_Email.addEventListener('click', (event) => {
        event.preventDefault()
        setTimeout(() => {
            console.log("cursos");
            SeccionCursos.classList.remove('hidden');
            SeccionTest.classList.add("hidden")
            SeccionNosotros.classList.add("hidden")
            SeccionPrincipal.classList.add("hidden")
            DivFormularioEmail.classList.add("oculto")
        },4000);
    });*/
    const BotonAsignarme = document.getElementById("BTN_Asignar").addEventListener('click', (event) => {
        SeccionRutas_Curso.classList.add("oculto")
        event.preventDefault()
        DivFormularioEmail.classList.remove("oculto")
        resetCombobox();
        modal_.close()
        limpiarDatosEnLocalStorage();
        guardarDatosEnLocalStorage(DatosCurso)
        const datosCargados = leerDatosDesdeLocalStorage();
        const inputs = {
            curso: document.getElementById("Nombre_Curso"),
            precio: document.getElementById("Precio_curso"),
            horario: document.getElementById("Horario_curso"),
            dia: document.getElementById("dia_curso"),
            descripcion: document.getElementById("Descripcion_curso"),
            id: document.getElementById("id_Curso"),
            participante: document.getElementById("participante"),
            emailAlumno: document.getElementById("AlumnoEmail")
        };

        // Fill form with stored data
        inputs.curso.value = datosCargados[0];
        inputs.precio.value = datosCargados[1];
        inputs.horario.value = datosCargados[3];
        inputs.dia.value = datosCargados[4];
        inputs.descripcion.value = datosCargados[5];
        inputs.id.value = datosCargados[6];
        
        

        const element = document.getElementById('SeccionFormulario');
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scroll({
            top: elementPosition,
            behavior: 'smooth'
        });

    })
    const Btn_RutasAprendizaje = document.getElementById("Rutas_Aprendizaje").addEventListener('click', (event) => {
        event.preventDefault()
        console.log("hola")
        limpiarDatosEnLocalStorage();
        guardarDatosEnLocalStorage(DatosCurso)
        const datosCargados = leerDatosDesdeLocalStorage();
        const DatosItems = {
            curso: datosCargados[0],
            precio: datosCargados[1],
            horario: datosCargados[3],
            dia: datosCargados[4],
            descripcion: datosCargados[5],
            id: datosCargados[6]
        };
        console.log(DatosItems.curso)
        console.log("------------A",datosCargados[2])
        console.log("------------A",datosCargados[7])

        /*pensar como hacer las rutas*/
        SeccionRutas_Curso.classList.remove("oculto")
        console.log(SeccionCursos.childNodes)

//obtencion de los datos de rutas de los cuross*****************************************
        const Rutes = document.getElementById("ruta");
        const rutes = document.createElement("div");
        rutes.className = "rutas_C";
        obtenerId = DatosItems.id; // Supongamos que DatosItems.id es "id:6"
        console.log("ID original:", obtenerId);
        // Utiliza split para separar la cadena y obtener solo el número
        let partes = obtenerId.split(":");
        obtenerId = parseInt(partes[1], 10); 
        console.log("ID extraído:", obtenerId);
        verRutaPorId(obtenerId);
        const htmlRuta = verRutaPorId(obtenerId); 
        Rutes.innerHTML = htmlRuta;
       //*****************************************fin rutas */

        //  --->
        const ImgRuta = document.getElementById("ImgProdRutas");
        const PrecioRuta = document.getElementById("precioRuta");
        const CategoriaRuta = document.getElementById("categoriaRuta");
        
        //  <---
        ImgRuta.src = datosCargados[7]
        PrecioRuta.textContent = DatosItems.precio
        CategoriaRuta.textContent = datosCargados[2]
        

        modal_.close()
        const ElemntoPosition = Rutes.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: ElemntoPosition,
            behavior: 'smooth'
        });
    });

    function guardarDatosEnLocalStorage(datos) {
        localStorage.setItem('datosCurso', JSON.stringify(datos));
        console.log('Datos guardados en Local Storage');
    }

    //par limpiar el localstorage "causa problemas en el boton asignar"
    function limpiarDatosEnLocalStorage() {
        localStorage.removeItem('datosCurso'); console.log('Datos limpiados en Local Storage');
    }

    function leerDatosDesdeLocalStorage() {
        const datos = localStorage.getItem('datosCurso');
        return datos ? JSON.parse(datos) : [];
    }
});
/*
function guardarDatosEnLocalStorage(datos) {
    const datosObjeto = {
        producto: datos[0],
        precio: datos[1],
        categoria: datos[2],
        horario: datos[3],
        dia: datos[4],
        descripcion: datos[5]
    };
    localStorage.setItem('datosCurso', JSON.stringify(datosObjeto));
    console.log('Datos guardados en Local Storage');
}*/

/*
export function leerDatosDesdeLocalStorage() {
    const datos = localStorage.getItem('datosCurso');
    return datos ? JSON.parse(datos) : [];
}*/



/**Seccion del test */

document.getElementById('formularioTest').addEventListener('submit', function (event) {
    event.preventDefault();

    // Respuestas correctas
    const respuestasCorrectas = {
        respuesta1: "Hola",
        respuesta2: "java",
        respuesta3: ["encapsulacion", "herencia", "polimorfismo"],
        respuesta4: "extends",
        respuesta5: "class",
        respuesta6: "interfaz",
        respuesta7: "hibrido"
    };

    // Nombres de las preguntas para el reporte
    const nombrePreguntas = {
        respuesta1: "Pregunta 1: Salida del código",
        respuesta2: "Pregunta 2: Lenguaje orientado a objetos",
        respuesta3: "Pregunta 3: Características de POO",
        respuesta4: "Pregunta 4: Palabra clave de herencia",
        respuesta5: "Pregunta 5: Definición de clase",
        respuesta6: "Pregunta 6: Definición de interfaz",
        respuesta7: "Pregunta 7: Tipo de lenguaje Java"
    };

    // Obtener las respuestas del formulario
    const respuestas = {
        respuesta1: document.querySelector('input[name="respuesta1"]').value.trim(),
        respuesta2: document.querySelector('select[name="respuesta2"]').value.trim().toLowerCase(),
        respuesta3: Array.from(document.querySelectorAll('input[name="respuesta3"]:checked'))
            .map(checkbox => checkbox.value.toLowerCase()),
        respuesta4: document.querySelector('input[name="respuesta4"]:checked')?.value.toLowerCase() || '',
        respuesta5: document.querySelector('textarea[name="respuesta5"]').value.trim().toLowerCase(),
        respuesta6: document.querySelector('input[name="respuesta6"]').value.trim().toLowerCase(),
        respuesta7: document.querySelector('input[name="respuesta7"]:checked')?.value.toLowerCase() || ''
    };

    // Calificar las respuestas
    let puntuacion = 0;
    let preguntasCorrectas = [];
    let preguntasIncorrectas = [];

    // Comparar respuesta1
    if (respuestas.respuesta1 === respuestasCorrectas.respuesta1) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta1);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta1,
            respuestaCorrecta: respuestasCorrectas.respuesta1,
            tuRespuesta: respuestas.respuesta1
        });
    }

    // Comparar respuesta2
    if (respuestas.respuesta2 === respuestasCorrectas.respuesta2) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta2);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta2,
            respuestaCorrecta: respuestasCorrectas.respuesta2,
            tuRespuesta: respuestas.respuesta2
        });
    }

    // Comparar respuesta3 (array)
    const respuesta3Correcta = respuestasCorrectas.respuesta3.every(r =>
        respuestas.respuesta3.includes(r.toLowerCase())) &&
        respuestas.respuesta3.length === respuestasCorrectas.respuesta3.length;
    if (respuesta3Correcta) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta3);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta3,
            respuestaCorrecta: respuestasCorrectas.respuesta3.join(", "),
            tuRespuesta: respuestas.respuesta3.join(", ")
        });
    }

    // Comparar respuesta4
    if (respuestas.respuesta4 === respuestasCorrectas.respuesta4) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta4);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta4,
            respuestaCorrecta: respuestasCorrectas.respuesta4,
            tuRespuesta: respuestas.respuesta4 || 'No seleccionada'
        });
    }

    // Comparar respuesta5 (verificar si contiene la palabra "class")
    if (respuestas.respuesta5.includes(respuestasCorrectas.respuesta5)) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta5);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta5,
            respuestaCorrecta: "Debe incluir una definición de clase con la palabra 'class'",
            tuRespuesta: respuestas.respuesta5
        });
    }

    // Comparar respuesta6 (verificar si contiene la palabra "interfaz")
    if (respuestas.respuesta6.includes(respuestasCorrectas.respuesta6)) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta6);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta6,
            respuestaCorrecta: "Debe incluir una explicación que contenga la palabra 'interfaz'",
            tuRespuesta: respuestas.respuesta6
        });
    }

    // Comparar respuesta7
    if (respuestas.respuesta7 === respuestasCorrectas.respuesta7) {
        puntuacion++;
        preguntasCorrectas.push(nombrePreguntas.respuesta7);
    } else {
        preguntasIncorrectas.push({
            pregunta: nombrePreguntas.respuesta7,
            respuestaCorrecta: respuestasCorrectas.respuesta7,
            tuRespuesta: respuestas.respuesta7 || 'No seleccionada'
        });
    }

    // Crear el mensaje de resultado
    let mensajeResultado = `
        <h3>Resultado del test</h3>
        <p>Puntuación: ${puntuacion} de 7</p>
    `;

    if (preguntasCorrectas.length > 0) {
        mensajeResultado += `
            <h4>Preguntas correctas:</h4>
            <ul>
                ${preguntasCorrectas.map(pregunta => `<li>${pregunta}</li>`).join('')}
            </ul>
        `;
    }

    if (preguntasIncorrectas.length > 0) {
        mensajeResultado += `
            <h4>Preguntas incorrectas:</h4>
            <ul>
                ${preguntasIncorrectas.map(item => `
                    <li>
                        ${item.pregunta}<br>
                        <span style="color: green;">Respuesta correcta: ${item.respuestaCorrecta}</span><br>
                        <span style="color: red;">Tu respuesta: ${item.tuRespuesta}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    // Crear o actualizar el elemento de resultado
    let resultadoElement = document.getElementById('resultado');
    if (!resultadoElement) {
        resultadoElement = document.createElement('div');
        resultadoElement.id = 'resultado';
        document.querySelector('.contenedor-test').appendChild(resultadoElement);
    }
    resultadoElement.innerHTML = mensajeResultado;
});