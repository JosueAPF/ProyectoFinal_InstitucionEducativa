const BTN_Asignar = document.getElementById("BTN_Mandar_Solicitud");

//inputs formulario de curso -estos se llenaran dinamicamente 
let NombreParticipante = document.getElementById("participante");
let inputCurso = document.getElementById("Nombre_Curso");
let inputId = document.getElementById("id_Curso");
let inputDia = document.getElementById("dia_curso");
let inputHorario = document.getElementById("Horario_curso");
let inputPrecio = document.getElementById("Precio_curso");
let inputDescripcion = document.getElementById("Descripcion_curso")
let EmailAlumno = document.getElementById("AlumnoEmail")

//leer datos del local storage
function leerDatosDesdeLocalStorage() {
    const datos = localStorage.getItem('datosCurso');
    return datos ? JSON.parse(datos) : [];
}



document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const originalAction = emailForm.action; // Guardamos la acción original
    
    // Load course data
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

    emailForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Create messages
        const eslogan1 = "😊 ¡Bienvenido a ProgramaYa! Donde aprendes A programar si o SI! 😊";
        const eslogan2 = "😊 ¡TENEMOS UN NUEVO PARTICIPANTE! 😊";
        
        const mensajeAlumno = `
            ${eslogan1}
            ¡Hola ${inputs.participante.value}! Gracias por inscribirte en nuestro curso 🤓
            ${ inputs.curso.value}. Aquí están los detalles de tu inscripción:
            - Nombre del Curso: ${ inputs.curso.value}
            - Día del Curso: ${inputs.dia.value}
            - Horario del Curso: ${inputs.horario.value}
            - Descripción del curso: ${inputs.descripcion.value }
            
            No olvides contactarnos :
            
            Estamos emocionados de tenerte con nosotros en ProgramaYa.
            ¡Prepárate para una experiencia educativa increíble! Saludos, El equipo de ProgramaYa`;

        const mensajeAdmin = `
            ${eslogan2}
            ¡Hola ${inputs.participante.value}! Gracias por inscribirte en nuestro curso
            ${ inputs.curso.value}. Aquí están los detalles de tu inscripción:
            - Nombre del Curso: ${ inputs.curso.value}
            - ID del Curso: ${inputs.id.value}
            - Día del Curso: ${datosCargados[4]}
            - Horario del Curso: ${inputs.horario.value}
            - Precio del Curso: ${inputs.precio.value}
            - Descripción: ${inputs.descripcion.value}`;

        try {
            // Primer envío - al admin
            const mensajeInput = document.createElement('input');
            mensajeInput.type = 'hidden';
            mensajeInput.name = 'message';
            mensajeInput.value = mensajeAdmin.trim();
            emailForm.appendChild(mensajeInput);
            
            // Enviar el formulario al admin
            emailForm.submit();

            // Esperar un momento antes de enviar al alumno
            setTimeout(() => {
                // Cambiar el destinatario y mensaje para el alumno
                emailForm.action = `https://formsubmit.co/${inputs.emailAlumno.value}`;
                mensajeInput.value = mensajeAlumno.trim();
                
                // Enviar el formulario al alumno
                emailForm.submit();

                // Limpiar localStorage
                localStorage.removeItem('datosCurso');
                
                // Restaurar la acción original del formulario
                emailForm.action = originalAction;
                
                // Mostrar mensaje de éxito
                alert('Inscripción enviada. Por favor revisa tu correo para confirmar la suscripción si es la primera vez.');
            }, 1000);
            
        } catch (error) {
            console.error('Error al enviar los formularios:', error);
            alert('Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente.');
        }
    });
});


//par limpiar el localstorage "causa problemas en el boton asignar"
function limpiarDatosEnLocalStorage() {
    localStorage.removeItem('datosCurso'); console.log('Datos limpiados en Local Storage');
}

/*



BTN_Asignar.addEventListener('click', () => {
   
})*/
    /*

document.addEventListener('DOMContentLoaded', function () {

    const datosCargados = leerDatosDesdeLocalStorage();
    inputCurso.value = datosCargados[0]
    inputPrecio.value = datosCargados[1]
    inputHorario.value = datosCargados[3]
    inputDia.value = datosCargados[4]
    inputDescripcion.value = datosCargados[5]
    inputId.value = datosCargados[6]

    console.log(datosCargados[0])
    console.log(datosCargados[1])
    console.log(datosCargados[2])
    console.log(datosCargados[3])
    console.log(datosCargados[4])
    console.log(datosCargados[5])
    console.log(datosCargados[6])
    */
/*
    document.getElementById('BTN_Mandar_Solicitud').addEventListener('click', function (event) {
        event.preventDefault();
        //bloque que le llega al correo del alumno
        const eslogan1 = "😊 ¡Bienvenido a ProgramaYa! Donde aprendes A programar si o SI! 😊"; 
        const eslogan2 = "😊 ¡TEMEMOS UN NUEVO PARTICIPANTE! 😊"; 
        const mensajeAlumno = ` 
            ${eslogan1} ¡Hola ${NombreParticipante.value}! Gracias por inscribirte en nuestro curso 🤓
            ${datosCargados[0]}. Aquí están los detalles de tu inscripción: 
            - Nombre del Curso: ${datosCargados[0]} 
            - Día del Curso: ${datosCargados[4]} 
            - Horario del Curso: ${datosCargados[3]}
            - Descripcion del curso:${datosCargados[5]}  
            No olvides contactarnos :
            
            Estamos emocionados de tenerte con nosotros en ProgramaYa. 
            ¡Prepárate para una experiencia educativa increíble! Saludos, El equipo de ProgramaYa `;
        //bloque que me llega a mi o a la entidad educativa
        const mensajeCompleto = ` 
            ${eslogan2} 
            ¡Hola ${NombreParticipante.value}! Gracias por inscribirte en nuestro curso 
            ${datosCargados[0]}. Aquí están los detalles de tu inscripción: 
            - Nombre del Curso: ${datosCargados[0]} 
            - ID del Curso: ${datosCargados[6]}
            - Día del Curso: ${datosCargados[4]} 
            - Horario del Curso: ${datosCargados[3]} 
            - Precio del Curso: ${datosCargados[1]} 
            - Descripción: ${datosCargados[5]} 
             `

        // Crear input oculto para el mensaje del alumno 
        const mensajeHiddenAlumno = document.createElement('input');
        mensajeHiddenAlumno.type = 'hidden'; 
        mensajeHiddenAlumno.name = 'message'; 
        mensajeHiddenAlumno.value = mensajeAlumno.trim(); 
        // Crear input oculto para el mensaje completo 
        const mensajeHiddenCompleto = document.createElement('input'); 
        mensajeHiddenCompleto.type = 'hidden'; 
        mensajeHiddenCompleto.name = 'message'; 
        mensajeHiddenCompleto.value = mensajeCompleto.trim();
        // Agregar el mensaje completo y enviar formulario a mi 
         document.getElementById('emailForm').appendChild(mensajeHiddenCompleto); 
         document.getElementById('emailForm').submit(); 
        // Remover el mensaje completo, agregar mensaje para el alumno y actualizar la acción del formulario 
         document.getElementById('emailForm').removeChild(mensajeHiddenCompleto); 
         document.getElementById('emailForm').appendChild(mensajeHiddenAlumno); 
         document.getElementById('emailForm').action = `https://formsubmit.co/${EmailAlumno.value}`; 
         document.getElementById('emailForm').submit();

         
    });
});
*/