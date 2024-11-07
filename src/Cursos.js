const cursos = [
    {
      id: 1,
      producto: "Programación Básica",
      categoria: "Programacion",
      horario: "07:30 - 09:05",
      dia: "Lunes",
      precio: 500,
      img: "./img/Cursos/Programacin_Basica.jpg",
      descripcion: "Introducción a la programación y los conceptos básicos de lógica y sintaxis."
    },
    {
      id: 2,
      producto: "Redes de Computadoras",
      categoria: "Redes",
      horario: "09:10 - 10:45",
      dia: "Martes",
      precio: 1200,
      img: "./img/Cursos/Redes_Computadoras.jpg",
      descripcion: "Fundamentos de redes de computadoras, protocolos, topologías y administración."
    },
    {
      id: 3,
      producto: "Desarrollo Web Avanzado",
      categoria: "Desarrollo Web",
      horario: "10:50 - 12:25",
      dia: "Miércoles",
      precio: 140,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Técnicas avanzadas de desarrollo web incluyendo frameworks, bibliotecas y despliegue."
    },
    {
      id: 4,
      producto: "Programación en Java",
      categoria: "Programacion",
      horario: "12:30 - 14:05",
      dia: "Jueves",
      precio: 1300,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Curso de programación en el lenguaje Java, incluyendo conceptos de POO."
    },
    {
      id: 5,
      producto: "Seguridad en Redes",
      categoria: "Seguridad",
      horario: "14:10 - 15:45",
      dia: "Viernes",
      precio: 1500,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Protección y mitigación de amenazas en redes de computadoras y sistemas."
    },
    {
      id: 6,
      producto: "Algoritmos y Estructuras de Datos",
      categoria: "Fundamentos",
      horario: "15:50 - 17:25",
      dia: "Lunes",
      precio: 1210,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Estudio de algoritmos eficientes y estructuras de datos para resolver problemas."
    },
    {
      id: 7,
      producto: "Programación en Python",
      categoria: "Programacion",
      horario: "07:30 - 09:05",
      dia: "Martes",
      precio: 1325,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Introducción al lenguaje de programación Python y sus aplicaciones."
    },
    {
      id: 8,
      producto: "Bases de Datos",
      categoria: "Datos",
      horario: "09:10 - 10:45",
      dia: "Miércoles",
      precio: 1350,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Diseño, implementación y administración de sistemas de bases de datos."
    },
    {
      id: 9,
      producto: "Desarrollo de Aplicaciones Móviles",
      categoria: "Desarrollo Movil",
      horario: "10:50 - 12:25",
      dia: "Jueves",
      precio: 1045,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Creación de aplicaciones nativas y multiplataforma para dispositivos móviles."
    },
    {
      id: 10,
      producto: "Inteligencia Artificial",
      categoria: "Inteligencia Artificial",
      horario: "12:30 - 14:05",
      dia: "Viernes",
      precio: 1600,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Introducción a los conceptos y técnicas básicas de inteligencia artificial."
    },
    {
      id: 11,
      producto: "Programación en C++",
      categoria: "Programacion",
      horario: "14:10 - 15:45",
      dia: "Lunes",
      precio: 105,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Curso de programación en el lenguaje C++, enfocado en programación orientada a objetos."
    },
    {
      id: 12,
      producto: "Administración de Redes",
      categoria: "Redes",
      horario: "15:50 - 17:25",
      dia: "Martes",
      precio: 1150,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Gestión, configuración y mantenimiento de redes de computadoras a nivel empresarial."
    },
    {
      id: 13,
      producto: "Programación Orientada a Objetos",
      categoria: "Programacion",
      horario: "07:30 - 09:05",
      dia: "Miércoles",
      precio: 1300,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Introducción a los conceptos fundamentales de la programación orientada a objetos."
    },
    {
      id: 14,
      producto: "Seguridad Informática",
      categoria: "Seguridad",
      horario: "09:10 - 10:45",
      dia: "Jueves",
      precio: 1450,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Protección de sistemas informáticos y datos frente a amenazas y vulnerabilidades."
    },
    {
      id: 15,
      producto: "Análisis de Sistemas",
      categoria: "Sistemas",
      horario: "10:50 - 12:25",
      dia: "Viernes",
      precio: 1350,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Estudio y diseño de sistemas de información para resolver problemas empresariales."
    },
    {
      id: 16,
      producto: "Desarrollo de Videojuegos",
      categoria: "Desarrollo de Juegos",
      horario: "12:30 - 14:05",
      dia: "Lunes",
      precio: 1400,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Creación de videojuegos utilizando motores y herramientas de desarrollo."
    },
    {
      id: 17,
      producto: "Machine Learning",
      categoria: "Inteligencia Artificial",
      horario: "14:10 - 15:45",
      dia: "Martes",
      precio: 1550,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Introducción a técnicas de aprendizaje automático y sus aplicaciones."
    },
    {
      id: 18,
      producto: "Despliegue en la Nube",
      categoria: "Cloud Computing",
      horario: "15:50 - 17:25",
      dia: "Miércoles",
      precio: 1545,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Implementación y administración de aplicaciones en plataformas de computación en la nube."
    },
    {
      id: 19,
      producto: "Arquitectura de Software",
      categoria: "Sistemas",
      horario: "07:30 - 09:05",
      dia: "Jueves",
      precio: 1200,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Diseño de arquitecturas de software escalables, flexibles y mantenibles."
    },
    {
      id: 20,
      producto: "Ciberseguridad",
      categoria: "Seguridad",
      horario: "09:10 - 10:45",
      dia: "Viernes",
      precio: 1500,
      img: "https://via.placeholder.com/300x200",
      descripcion: "Protección de sistemas informáticos y redes frente a ciberataques y delitos digitales."
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

