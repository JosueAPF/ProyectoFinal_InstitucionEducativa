const cursos = [
    {
        id: 1,
        producto: "Programación Básica",
        categoria: "Programacion",
        horario: "07:30 - 09:05",
        dia: "Lunes",
        precio: 500,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        producto: "Redes de Computadoras",
        categoria: "Redes",
        horario: "09:10 - 10:45",
        dia: "Martes",
        precio: 1200,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        producto: "Desarrollo Web Avanzado",
        categoria: "Desarrollo Web",
        horario: "10:50 - 12:25",
        dia: "Miércoles",
        precio: 140,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        producto: "Programación en Java",
        categoria: "Programacion",
        horario: "12:30 - 14:05",
        dia: "Jueves",
        precio: 1300,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 5,
        producto: "Seguridad en Redes",
        categoria: "Seguridad",
        horario: "14:10 - 15:45",
        dia: "Viernes",
        precio: 1500,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 6,
        producto: "Algoritmos y Estructuras de Datos",
        categoria: "Fundamentos",
        horario: "15:50 - 17:25",
        dia: "Lunes",
        precio: 1210,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 7,
        producto: "Programación en Python",
        categoria: "Programacion",
        horario: "07:30 - 09:05",
        dia: "Martes",
        precio: 1325,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 8,
        producto: "Bases de Datos",
        categoria: "Datos",
        horario: "09:10 - 10:45",
        dia: "Miércoles",
        precio: 1350,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 9,
        producto: "Desarrollo de Aplicaciones Móviles",
        categoria: "Desarrollo Movil",
        horario: "10:50 - 12:25",
        dia: "Jueves",
        precio: 1045,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 10,
        producto: "Inteligencia Artificial",
        categoria: "Inteligencia Artificial",
        horario: "12:30 - 14:05",
        dia: "Viernes",
        precio: 1600,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 11,
        producto: "Programación en C++",
        categoria: "Programacion",
        horario: "14:10 - 15:45",
        dia: "Lunes",
        precio: 105,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 12,
        producto: "Administración de Redes",
        categoria: "Redes",
        horario: "15:50 - 17:25",
        dia: "Martes",
        precio: 1150,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 13,
        producto: "Programación Orientada a Objetos",
        categoria: "Programacion",
        horario: "07:30 - 09:05",
        dia: "Miércoles",
        precio: 1300,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 14,
        producto: "Seguridad Informática",
        categoria: "Seguridad",
        horario: "09:10 - 10:45",
        dia: "Jueves",
        precio: 1450,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 15,
        producto: "Análisis de Sistemas",
        categoria: "Sistemas",
        horario: "10:50 - 12:25",
        dia: "Viernes",
        precio: 1350,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 16,
        producto: "Desarrollo de Videojuegos",
        categoria: "Desarrollo de Juegos",
        horario: "12:30 - 14:05",
        dia: "Lunes",
        precio: 1400,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 17,
        producto: "Machine Learning",
        categoria: "Inteligencia Artificial",
        horario: "14:10 - 15:45",
        dia: "Martes",
        precio: 1550,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 18,
        producto: "Despliegue en la Nube",
        categoria: "Cloud Computing",
        horario: "15:50 - 17:25",
        dia: "Miércoles",
        precio: 1545,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 19,
        producto: "Arquitectura de Software",
        categoria: "Sistemas",
        horario: "07:30 - 09:05",
        dia: "Jueves",
        precio: 1200,
        img: "https://via.placeholder.com/300x200"
    },
    {
        id: 20,
        producto: "Ciberseguridad",
        categoria: "Seguridad",
        horario: "09:10 - 10:45",
        dia: "Viernes",
        precio: 1500,
        img: "https://via.placeholder.com/300x200"
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

