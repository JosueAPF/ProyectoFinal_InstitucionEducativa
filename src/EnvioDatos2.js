// Obtener elementos del formulario
const BTN_Asignar = document.getElementById("BTN_Mandar_Solicitud");

// Inputs del formulario
let NombreParticipante = document.getElementById("participante");
let inputCurso = document.getElementById("Nombre_Curso");
let inputId = document.getElementById("id_Curso");
let inputDia = document.getElementById("dia_curso");
let inputHorario = document.getElementById("Horario_curso");
let inputPrecio = document.getElementById("Precio_curso");
let inputDescripcion = document.getElementById("Descripcion_curso");
let EmailAlumno = document.getElementById("AlumnoEmail");

// Leer datos del local storage
function leerDatosDesdeLocalStorage() {
    const datos = localStorage.getItem('datosCurso');
    return datos ? JSON.parse(datos) : [];
}

document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');

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

    // Llenar el formulario con los datos almacenados
    inputs.curso.value = datosCargados[0];
    inputs.precio.value = datosCargados[1];
    inputs.horario.value = datosCargados[3];
    inputs.dia.value = datosCargados[4];
    inputs.descripcion.value = datosCargados[5];
    inputs.id.value = datosCargados[6];

    emailForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Crear los mensajes
        const eslogan1 = "😊 ¡Bienvenido a ProgramaYa! Donde aprendes A programar si o SI! 😊";
        const eslogan2 = "😊 ¡TENEMOS UN NUEVO PARTICIPANTE! 😊";
        let EmailParticpante  = inputs.emailAlumno.value;
        
        const mensajeAlumno = `
            ${eslogan1}
            ¡Hola ${inputs.participante.value}! Gracias por inscribirte en nuestro curso 🤓
            ${datosCargados[0]}. Aquí están los detalles de tu inscripción:
            - Nombre del Curso: ${datosCargados[0]}
            - Día del Curso: ${datosCargados[4]}
            - Horario del Curso: ${datosCargados[3]}
            - Descripción del curso: ${datosCargados[5]}
            
            No olvides contactarnos :
            
            Estamos emocionados de tenerte con nosotros en ProgramaYa.
            ¡Prepárate para una experiencia educativa increíble! Saludos, El equipo de ProgramaYa`;

        const mensajeAdmin = `
            ${eslogan2}
            ¡Hola ${inputs.participante.value}! Gracias por inscribirte en nuestro curso
            ${datosCargados[0]}. Aquí están los detalles de tu inscripción:
            - Nombre del Curso: ${datosCargados[0]}
            - ID del Curso: ${datosCargados[6]}
            - Día del Curso: ${datosCargados[4]}
            - Horario del Curso: ${datosCargados[3]}
            - Precio del Curso: ${datosCargados[1]}
            - Descripción: ${datosCargados[5]}`;

        // Datos para enviar a Zapier
        const data = {
            participante: inputs.participante.value,
            emailAlumno: inputs.emailAlumno.value,
            nombre_curso: inputs.curso.value,
            id_curso: inputs.id.value,
            dia_curso: inputs.dia.value,
            horario_curso: inputs.horario.value,
            precio_curso: inputs.precio.value,
            descripcion_curso: inputs.descripcion.value,
            mensajeAlumno: mensajeAlumno.trim(),
            mensajeAdmin: mensajeAdmin.trim()
        };

        // URL del webhook de Zapier (reemplaza con tu propia URL)
        const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/5131862/25ceien/'; // REEMPLAZA CON TU WEBHOOK

        try {
            const response = await fetch(zapierWebhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Inscripción enviada correctamente. Revisa tu correo para confirmar.');
                
                // Limpiar localStorage
                localStorage.removeItem('datosCurso');

                // Redireccionar o recargar la página
                window.location.assign("index.html");
            } else {
                alert('Hubo un problema al enviar la inscripción. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al enviar la inscripción:', error);
            alert('Error al enviar la inscripción. Por favor, intenta nuevamente.');
        }
    });
});
