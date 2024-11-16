/*no existe y depende de el evento de los items */
//estiloss para las categorias
export function CategoriaStyle(params) {
    const EtiquetasCategoria = document.querySelectorAll("#categoriaP");
    const estilosBase = {
        padding: "8px 12px",
        borderRadius: "8px",
        display: "inline-block",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease"
    };
    //iteracion de las etiquetas <p> 
    EtiquetasCategoria.forEach(Categorias => {
        Object.assign(Categorias.style, estilosBase);
        
        //eventos para las etiquetas
        // Agregar efecto hover
        Categorias.addEventListener('mouseenter', () => {
            Categorias.style.transform = 'translateY(-2px)';
            Categorias.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        Categorias.addEventListener('mouseleave', () => {
            Categorias.style.transform = 'translateY(0)';
            Categorias.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
        //obteniendo las Palabras clave y aplicando el estilo a la etiqueta<p>
        console.log(Categorias.textContent)
        switch (Categorias.textContent.trim()) {
            case "Categoría: Seguridad":
                Categorias.style.backgroundColor = "#ffebee";
                Categorias.style.color = "#d32f2f";
                Categorias.style.border = "1px solid #ffcdd2";
                break;
            case "Categoría: Programacion":
                Categorias.style.backgroundColor = "#e3f2fd";
                Categorias.style.color = "#1976d2";
                Categorias.style.border = "1px solid #bbdefb";
                break;
            case "Categoría: Redes":
                Categorias.style.backgroundColor = "#f3e5f5";
                Categorias.style.color = "#7b1fa2";
                Categorias.style.border = "1px solid #e1bee7";
                break;
            case "Categoría: Desarrollo Web":
                Categorias.style.backgroundColor = "#e8f5e9";
                Categorias.style.color = "#388e3c";
                Categorias.style.border = "1px solid #c8e6c9";
                break;
            case "Categoría: Fundamentos":
                Categorias.style.backgroundColor = "#e0f7fa";
                Categorias.style.color = "#0097a7";
                Categorias.style.border = "1px solid #b2ebf2";
                break;
            case "Categoría: Datos":
                Categorias.style.backgroundColor = "#fff3e0";
                Categorias.style.color = "#f57c00";
                Categorias.style.border = "1px solid #ffe0b2";
                break;
            case "Categoría: Desarrollo Movil":
                Categorias.style.backgroundColor = "#fce4ec";
                Categorias.style.color = "#c2185b";
                Categorias.style.border = "1px solid #f8bbd0";
                break;
            case "Categoría: Inteligencia Artificial":
                Categorias.style.backgroundColor = "#e8eaf6";
                Categorias.style.color = "#3949ab";
                Categorias.style.border = "1px solid #c5cae9";
                break;
            case "Categoría: Sistemas":
                Categorias.style.backgroundColor = "#efebe9";
                Categorias.style.color = "#5d4037";
                Categorias.style.border = "1px solid #d7ccc8";
                break;
            case "Categoría: Cloud Computing":
                Categorias.style.backgroundColor = "#f1f8e9";
                Categorias.style.color = "#558b2f";
                Categorias.style.border = "1px solid #dcedc8";
                break;
            case "Categoría: Desarrollo de Juegos":
                    Categorias.style.backgroundColor = "#fffde7";
                    Categorias.style.color = "#ff8f00";
                    Categorias.style.border = "1px solid #ffecb3";
                break;
            default:
                break;
        }
    });
}

/*este existe al seleccionar una categoria*/
//similar al anterior, pero esta vez aplicado a los items
export function EstilosCategoriaItem(parametro){
    const ParrafosItems = document.querySelectorAll("#TarjetaCategoria");
    const estilosBase = {
        padding: "8px 12px",
        borderRadius: "6px",
        display: "inline-block",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease"
    };
    //iteracion de las etiquetas <p> items
    ParrafosItems.forEach(Categorias => {
        Object.assign(Categorias.style, estilosBase);
        
        //eventos para las etiquetas
        // Agregar efecto hover
        Categorias.addEventListener('mouseenter', () => {
            Categorias.style.transform = 'translateY(-2px)';
            Categorias.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        Categorias.addEventListener('mouseleave', () => {
            Categorias.style.transform = 'translateY(0)';
            Categorias.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
        //obteniendo las Palabras clave y aplicando el estilo a la etiqueta<p>
        console.log(Categorias.textContent)
        switch (Categorias.textContent.trim()) {
            case "Categoría: Seguridad":
                Categorias.style.backgroundColor = "#ffebee";
                Categorias.style.color = "#d32f2f";
                Categorias.style.border = "1px solid #ffcdd2";
                break;
            case "Categoría: Programacion":
                Categorias.style.backgroundColor = "#e3f2fd";
                Categorias.style.color = "#1976d2";
                Categorias.style.border = "1px solid #bbdefb";
                break;
            case "Categoría: Redes":
                Categorias.style.backgroundColor = "#f3e5f5";
                Categorias.style.color = "#7b1fa2";
                Categorias.style.border = "1px solid #e1bee7";
                break;
            case "Categoría: Desarrollo Web":
                Categorias.style.backgroundColor = "#e8f5e9";
                Categorias.style.color = "#388e3c";
                Categorias.style.border = "1px solid #c8e6c9";
                break;
            case "Categoría: Fundamentos":
                Categorias.style.backgroundColor = "#e0f7fa";
                Categorias.style.color = "#0097a7";
                Categorias.style.border = "1px solid #b2ebf2";
                break;
            case "Categoría: Datos":
                Categorias.style.backgroundColor = "#fff3e0";
                Categorias.style.color = "#f57c00";
                Categorias.style.border = "1px solid #ffe0b2";
                break;
            case "Categoría: Desarrollo Movil":
                Categorias.style.backgroundColor = "#fce4ec";
                Categorias.style.color = "#c2185b";
                Categorias.style.border = "1px solid #f8bbd0";
                break;
            case "Categoría: Inteligencia Artificial":
                Categorias.style.backgroundColor = "#e8eaf6";
                Categorias.style.color = "#3949ab";
                Categorias.style.border = "1px solid #c5cae9";
                break;
            case "Categoría: Sistemas":
                Categorias.style.backgroundColor = "#efebe9";
                Categorias.style.color = "#5d4037";
                Categorias.style.border = "1px solid #d7ccc8";
                break;
            case "Categoría: Cloud Computing":
                Categorias.style.backgroundColor = "#f1f8e9";
                Categorias.style.color = "#558b2f";
                Categorias.style.border = "1px solid #dcedc8";
                break;
            case "Categoría: Desarrollo de Juegos":
                    Categorias.style.backgroundColor = "#fffde7";
                    Categorias.style.color = "#ff8f00";
                    Categorias.style.border = "1px solid #ffecb3";
                break;
            default:
                break;
        }
    });
}


