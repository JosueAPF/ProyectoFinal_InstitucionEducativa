const cursos = [
  {
    id: 1,
    producto: "Programación Básica",
    categoria: "Programacion",
    horario: "07:30 - 09:05",
    dia: "Lunes",
    precio: 500,
    img: "./img/Cursos/Programacin_Basica.jpg",
    descripcion: "Introducción a la programación y los conceptos básicos de lógica y sintaxis.",
    rutaCurso: [
      { semana: 1, tema: "Introducción a la Lógica de Programación", actividades: ["Conceptos básicos de algoritmos", "Diagramas de flujo", "Pseudocódigo"] },
      { semana: 2, tema: "Variables y Tipos de Datos", actividades: ["Declaración de variables", "Operadores básicos", "Ejercicios prácticos"] },
      { semana: 3, tema: "Estructuras de Control", actividades: ["Condicionales if-else", "Bucles while y for", "Resolución de problemas"] }
    ]
  },
  {
    id: 2,
    producto: "Redes de Computadoras",
    categoria: "Redes",
    horario: "09:10 - 10:45",
    dia: "Martes",
    precio: 1200,
    img: "./img/Cursos/Redes_Computadoras.jpg",
    descripcion: "Fundamentos de redes de computadoras, protocolos, topologías y administración.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de Redes", actividades: ["Modelos OSI y TCP/IP", "Tipos de redes", "Topologías básicas"] },
      { semana: 2, tema: "Protocolos de Red", actividades: ["Protocolo IP", "Protocolo TCP/UDP", "Configuración básica"] },
      { semana: 3, tema: "Administración de Red", actividades: ["Configuración de routers", "Seguridad básica", "Monitoreo de red"] }
    ]
  },
  {
    id: 3,
    producto: "Desarrollo Web Avanzado",
    categoria: "Desarrollo Web",
    horario: "10:50 - 12:25",
    dia: "Miércoles",
    precio: 140,
    img: "./img/Cursos/DesarrolloWebAvanzado.jpg",
    descripcion: "Técnicas avanzadas de desarrollo web incluyendo frameworks, bibliotecas y despliegue.",
    rutaCurso: [
      { semana: 1, tema: "Frontend Avanzado", actividades: ["React fundamentals", "Estado y props", "Hooks básicos"] },
      { semana: 2, tema: "Backend Integration", actividades: ["APIs RESTful", "Autenticación", "Manejo de datos"] },
      { semana: 3, tema: "Despliegue y Optimización", actividades: ["Deploy en la nube", "Performance", "SEO básico"] }
    ]
  },
  {
    id: 4,
    producto: "Programación en Java",
    categoria: "Programacion",
    horario: "12:30 - 14:05",
    dia: "Jueves",
    precio: 1300,
    img: "./img/Cursos/Programacion_Java.jpg",
    descripcion: "Curso de programación en el lenguaje Java, incluyendo conceptos de POO.",
    rutaCurso: [
      { semana: 1, tema: "Introducción a Java", actividades: ["Sintaxis básica", "JDK y entorno", "Primeros programas"] },
      { semana: 2, tema: "POO en Java", actividades: ["Clases y objetos", "Herencia", "Polimorfismo"] },
      { semana: 3, tema: "Estructuras Avanzadas", actividades: ["Colecciones", "Manejo de excepciones", "Interfaces"] }
    ]
  },
  {
    id: 5,
    producto: "Seguridad en Redes",
    categoria: "Seguridad",
    horario: "14:10 - 15:45",
    dia: "Viernes",
    precio: 1500,
    img: "./img/Cursos/SeguridadEnRedes.jpg",
    descripcion: "Protección y mitigación de amenazas en redes de computadoras y sistemas.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de Seguridad", actividades: ["Tipos de amenazas", "Modelos de seguridad", "Evaluación de riesgos"] },
      { semana: 2, tema: "Implementación de Seguridad", actividades: ["Configuración de firewalls", "VPNs", "Sistemas de detección"] },
      { semana: 3, tema: "Monitoreo y Respuesta", actividades: ["Análisis de logs", "Respuesta a incidentes", "Mejores prácticas"] }
    ]
  },
  {
    id: 6,
    producto: "Algoritmos y Estructuras de Datos",
    categoria: "Fundamentos",
    horario: "15:50 - 17:25",
    dia: "Lunes",
    precio: 1210,
    img: "./img/Cursos/AlgoritmosEstructuraDatos.jpg",
    descripcion: "Estudio de algoritmos eficientes y estructuras de datos para resolver problemas.",
    rutaCurso: [
      { semana: 1, tema: "Estructuras Básicas", actividades: ["Arrays y listas", "Pilas y colas", "Recursividad"] },
      { semana: 2, tema: "Algoritmos de Búsqueda", actividades: ["Búsqueda binaria", "Árboles binarios", "Grafos básicos"] },
      { semana: 3, tema: "Algoritmos de Ordenamiento", actividades: ["Bubble sort", "Quick sort", "Merge sort"] }
    ]
  },
  {
    id: 7,
    producto: "Programación en Python",
    categoria: "Programacion",
    horario: "07:30 - 09:05",
    dia: "Martes",
    precio: 1325,
    img: "./img/Cursos/Programacion_Python.jpg",
    descripcion: "Introducción al lenguaje de programación Python y sus aplicaciones.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de Python", actividades: ["Sintaxis básica", "Tipos de datos", "Control de flujo"] },
      { semana: 2, tema: "Estructuras de Datos", actividades: ["Listas y tuplas", "Diccionarios", "Comprensiones"] },
      { semana: 3, tema: "Programación Funcional", actividades: ["Funciones lambda", "Map y filter", "Decoradores"] }
    ]
  },
  {
    id: 8,
    producto: "Bases de Datos",
    categoria: "Datos",
    horario: "09:10 - 10:45",
    dia: "Miércoles",
    precio: 1350,
    img: "./img/Cursos/BaseDatos.jpg",
    descripcion: "Diseño, implementación y administración de sistemas de bases de datos.",
    rutaCurso: [
      { semana: 1, tema: "Modelado de Datos", actividades: ["Modelo entidad-relación", "Normalización", "Diseño lógico"] },
      { semana: 2, tema: "SQL Fundamentals", actividades: ["Consultas básicas", "Joins", "Subconsultas"] },
      { semana: 3, tema: "Administración", actividades: ["Indexación", "Optimización", "Respaldos"] }
    ]
  },
  {
    id: 9,
    producto: "Desarrollo de Aplicaciones Móviles",
    categoria: "Desarrollo Movil",
    horario: "10:50 - 12:25",
    dia: "Jueves",
    precio: 1045,
    img: "./img/Cursos/AplicacinesMoviles.jpg",
    descripcion: "Creación de aplicaciones nativas y multiplataforma para dispositivos móviles.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos Móviles", actividades: ["UI/UX móvil", "Arquitectura", "Componentes básicos"] },
      { semana: 2, tema: "Desarrollo Nativo", actividades: ["Layouts", "Navigation", "Estado y datos"] },
      { semana: 3, tema: "APIs y Servicios", actividades: ["REST APIs", "Storage local", "Push notifications"] }
    ]
  },
  {
    id: 10,
    producto: "Inteligencia Artificial",
    categoria: "Inteligencia Artificial",
    horario: "12:30 - 14:05",
    dia: "Viernes",
    precio: 1600,
    img: "./img/Cursos/InteligenciaArtificial.jpg",
    descripcion: "Introducción a los conceptos y técnicas básicas de inteligencia artificial.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de IA", actividades: ["Tipos de IA", "Agentes inteligentes", "Búsqueda heurística"] },
      { semana: 2, tema: "Machine Learning Básico", actividades: ["Regresión", "Clasificación", "Evaluación de modelos"] },
      { semana: 3, tema: "Neural Networks", actividades: ["Perceptrón", "Backpropagation", "CNN básicas"] }
    ]
  },
  {
    id: 11,
    producto: "Programación en C++",
    categoria: "Programacion",
    horario: "14:10 - 15:45",
    dia: "Lunes",
    precio: 105,
    img: "./img/Cursos/Programacion_c++.jpg",
    descripcion: "Curso de programación en el lenguaje C++, enfocado en programación orientada a objetos.",
    rutaCurso: [
      { semana: 1, tema: "Básicos de C++", actividades: ["Sintaxis", "Punteros", "Referencias"] },
      { semana: 2, tema: "POO en C++", actividades: ["Clases", "Herencia", "Polimorfismo"] },
      { semana: 3, tema: "STL", actividades: ["Contenedores", "Iteradores", "Algoritmos"] }
    ]
  },
  {
    id: 12,
    producto: "Administración de Redes",
    categoria: "Redes",
    horario: "15:50 - 17:25",
    dia: "Martes",
    precio: 1150,
    img: "./img/Cursos/Admin_Redes.jpg",
    descripcion: "Gestión, configuración y mantenimiento de redes de computadoras a nivel empresarial.",
    rutaCurso: [
      { semana: 1, tema: "Gestión de Red", actividades: ["SNMP", "Monitoreo", "Documentación"] },
      { semana: 2, tema: "Configuración Avanzada", actividades: ["VLANs", "Routing", "QoS"] },
      { semana: 3, tema: "Seguridad de Red", actividades: ["Políticas", "Firewall", "IDS/IPS"] }
    ]
  },
  {
    id: 13,
    producto: "Programación Orientada a Objetos",
    categoria: "Programacion",
    horario: "07:30 - 09:05",
    dia: "Miércoles",
    precio: 1300,
    img: "./img/Cursos/Programacion_Poo.jpg",
    descripcion: "Introducción a los conceptos fundamentales de la programación orientada a objetos.",
    rutaCurso: [
      { semana: 1, tema: "Conceptos POO", actividades: ["Objetos y clases", "Encapsulamiento", "Abstracción"] },
      { semana: 2, tema: "Relaciones", actividades: ["Herencia", "Interfaces", "Composición"] },
      { semana: 3, tema: "Patrones", actividades: ["Singleton", "Factory", "Observer"] }
    ]
  },
  {
    id: 14,
    producto: "Seguridad Informática",
    categoria: "Seguridad",
    horario: "09:10 - 10:45",
    dia: "Jueves",
    precio: 1450,
    img: "./img/Cursos/Seguridad_informatica.jpg",
    descripcion: "Protección de sistemas informáticos y datos frente a amenazas y vulnerabilidades.",
    rutaCurso: [
      { semana: 1, tema: "Conceptos de Seguridad", actividades: ["CIA triad", "Threat modeling", "Risk assessment"] },
      { semana: 2, tema: "Seguridad Práctica", actividades: ["Hardening", "Cryptography", "Access control"] },
      { semana: 3, tema: "Ethical Hacking", actividades: ["Penetration testing", "Tools", "Best practices"] }
    ]
  },
  {
    id: 15,
    producto: "Análisis de Sistemas",
    categoria: "Sistemas",
    horario: "10:50 - 12:25",
    dia: "Viernes",
    precio: 1350,
    img: "./img/Cursos/Analisis_sistemas.jpg",
    descripcion: "Estudio y diseño de sistemas de información para resolver problemas empresariales.",
    rutaCurso: [
      { semana: 1, tema: "Análisis de Requisitos", actividades: ["Entrevistas", "Documentación", "Casos de uso"] },
      { semana: 2, tema: "Diseño de Sistemas", actividades: ["Arquitectura", "Diagramas UML", "Prototipos"] },
      { semana: 3, tema: "Implementación", actividades: ["Planning", "Testing", "Deployment"] }
    ]
  },
  {
    id: 16,
    producto: "Desarrollo de Videojuegos",
    categoria: "Desarrollo de Juegos",
    horario: "12:30 - 14:05",
    dia: "Lunes",
    precio: 1400,
    img: "./img/Cursos/Desarrollo_videojuegos.jpg",
    descripcion: "Creación de videojuegos utilizando motores y herramientas de desarrollo.",
    rutaCurso: [
      { semana: 1, tema: "Game Design", actividades: ["Mecánicas", "Level design", "Game loop"] },
      { semana: 2, tema: "Unity Basics", actividades: ["Scene management", "GameObjects", "Physics"] },
      { semana: 3, tema: "Gameplay", actividades: ["Input handling", "AI básica", "UI/UX"] }
    ]
  },
  // ... (items 1-16 permanecen igual)
  {
    id: 17,
    producto: "Machine Learning",
    categoria: "Inteligencia Artificial",
    horario: "14:10 - 15:45",
    dia: "Martes",
    precio: 1550,
    img: "./img/Cursos/Machine_learning.jpg",
    descripcion: "Introducción a técnicas de aprendizaje automático y sus aplicaciones.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de ML", actividades: ["Tipos de aprendizaje", "Preprocesamiento", "Feature engineering"] },
      { semana: 2, tema: "Algoritmos Supervisados", actividades: ["Regresión lineal", "Árboles de decisión", "SVM"] },
      { semana: 3, tema: "Algoritmos No Supervisados", actividades: ["Clustering", "Reducción dimensional", "Anomaly detection"] }
    ]
  },
  {
    id: 18,
    producto: "Despliegue en la Nube",
    categoria: "Cloud Computing",
    horario: "15:50 - 17:25",
    dia: "Miércoles",
    precio: 1545,
    img: "./img/Cursos/Despliege_nuve.jpg",
    descripcion: "Implementación y administración de aplicaciones en plataformas de computación en la nube.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos Cloud", actividades: ["Modelos de servicio", "Arquitecturas cloud", "Providers"] },
      { semana: 2, tema: "Servicios AWS", actividades: ["EC2", "S3", "Lambda"] },
      { semana: 3, tema: "DevOps Prácticas", actividades: ["CI/CD", "Containerización", "Monitoreo"] }
    ]
  },
  {
    id: 19,
    producto: "Arquitectura de Software",
    categoria: "Sistemas",
    horario: "07:30 - 09:05",
    dia: "Jueves",
    precio: 1200,
    img: "./img/Cursos/Arquitecturra_software.jpg",
    descripcion: "Diseño de arquitecturas de software escalables, flexibles y mantenibles.",
    rutaCurso: [
      { semana: 1, tema: "Principios de Diseño", actividades: ["SOLID", "Patrones arquitectónicos", "Clean Architecture"] },
      { semana: 2, tema: "Microservicios", actividades: ["Diseño de APIs", "Service mesh", "Event-driven"] },
      { semana: 3, tema: "Calidad", actividades: ["Testing", "Performance", "Seguridad"] }
    ]
  },
  {
    id: 20,
    producto: "Ciberseguridad",
    categoria: "Seguridad",
    horario: "09:10 - 10:45",
    dia: "Viernes",
    precio: 1500,
    img: "./img/Cursos/Ciberseguridad.jpg",
    descripcion: "Protección de sistemas informáticos y redes frente a ciberataques y delitos digitales.",
    rutaCurso: [
      { semana: 1, tema: "Fundamentos de Ciberseguridad", actividades: ["Tipos de amenazas", "Vectores de ataque", "Principios de seguridad"] },
      { semana: 2, tema: "Técnicas de Protección", actividades: ["Firewall y IDS", "Cifrado básico", "Seguridad en redes"] },
      { semana: 3, tema: "Respuesta a Incidentes", actividades: ["Análisis de malware", "Forensia básica", "Planes de contingencia"] }
    ]
  }
];


export const FiltrandoCursos = cursos.filter(producto => {
    return producto.categoria === "Sistemas";
});

export const filtrarPorCategoria = (Categoria) => {
    return cursos.filter(curso =>
        curso.categoria.toLowerCase() === Categoria.toLowerCase()
    );
};
/*
export function MostrarTodo(filterCategory = "todo") {
  const FiltrarTodo = cursos.filter(Cursos => {
    return filterCategory === "todo" || Cursos.categoria === filterCategory;
  });
}*/
export function MostrarTodo(filterCategory = 'todo') 
{ const FiltrarTodo = cursos.filter(Cursos => {
   return filterCategory === 'todo' || Cursos.categoria === filterCategory; });
    return FiltrarTodo; 
 }


// 1. Ver la ruta de un curso específico por ID
/*
export const verRutaPorId = (id) => {
  const curso = cursos.find(curso => curso.id === id);
  if (curso) {
      // Crear un contenedor para el contenido HTML
      let htmlContent = `
          <div class="curso">
              <h2>Ruta del curso: ${curso.producto}</h2>
              <h3>Tema: ${curso.rutaCurso[0].tema}</h3>
              <ul>
                  <li>Semana 1: ${curso.rutaCurso[0].actividades[0]}</li>
                  <li>Semana 2: ${curso.rutaCurso[0].actividades[1]}</li>
                  <li>Semana 3: ${curso.rutaCurso[0].actividades[2]}</li>
              </ul>
          </div>
      `;
      return htmlContent;
  } else {
      return '<div class="curso"><p>Curso no encontrado</p></div>';
  }
};*/
export const verRutaPorId = (id) => {
  const curso = cursos.find(curso => curso.id === id);
  if (curso) {
      // Crear un contenedor para el contenido HTML
      let htmlContent = `
          <div class="curso">
              <h2>Ruta del curso: ${curso.producto}</h2>
      `;
      let i=1;
      curso.rutaCurso.forEach(semana => {
          htmlContent += `
              <div class="semana">
                  <h2> ⛔ semana ${i++}</h2>
                  <h3> Tema: ${semana.tema}</h3>
                  <ul>
                      ${semana.actividades.map(actividad => `<li>${actividad}</li>`).join('')}
                  </ul>
              </div>
          `;
      });

      htmlContent += `</div>`;
      return htmlContent;
  } else {
      return '<div class="curso"><p>Curso no encontrado</p></div>';
  }
};





/*
export const verRutaPorId = (id) => {
  const curso = cursos.find(curso => curso.id === id);
  if (curso) {
      console.log(`Ruta del curso: ${curso.producto}`);
      console.log(curso.rutaCurso[0].tema);
      console.log("semana 1",curso.rutaCurso[0].actividades[0]);
      console.log("semana 2",curso.rutaCurso[0].actividades[1]);
      console.log("semana 3",curso.rutaCurso[0].actividades[2]);
  } else {
      console.log("Curso no encontrado");
  }
};
*/
