const products = [
    {
        id: 1,
        title: "El nombre del viento",
        price: 19.99,
        description: "La historia de un joven prodigio en la magia que se convierte en leyenda.",
        pictureUrl: "https://example.com/kvothe.jpg",
        genre: "Fantasía",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 2,
        title: "Cien años de soledad",
        price: 14.5,
        description: "La saga de la familia Buendía en el mítico pueblo de Macondo.",
        pictureUrl: "https://example.com/soledad.jpg",
        genre: "Realismo mágico",
        isPhysical: true,
        isEbook: false,
    },
    {
        id: 3,
        title: "1984",
        price: 12.75,
        description: "Una distopía que alerta sobre los peligros del totalitarismo.",
        pictureUrl: "https://example.com/1984.jpg",
        genre: "Ciencia ficción",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 4,
        title: "Orgullo y prejuicio",
        price: 10.99,
        description: "Una crítica a la sociedad inglesa del siglo XIX a través del romance.",
        pictureUrl: "https://example.com/pride.jpg",
        genre: "Romance",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 5,
        title: "Dune",
        price: 22.5,
        description: "Una epopeya interplanetaria sobre poder, religión y ecología.",
        pictureUrl: "https://example.com/dune.jpg",
        genre: "Ciencia ficción",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 6,
        title: "Crónica de una muerte anunciada",
        price: 9.99,
        description: "Una tragedia anunciada desde la primera página.",
        pictureUrl: "https://example.com/cronica.jpg",
        genre: "Drama",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 7,
        title: "Los juegos del hambre",
        price: 15.0,
        description: "Una joven debe sobrevivir a una competencia mortal en un mundo distópico.",
        pictureUrl: "https://example.com/hunger.jpg",
        genre: "Juvenil",
        isPhysical: true,
        isEbook: false,
    },
    {
        id: 8,
        title: "Harry Potter y la piedra filosofal",
        price: 17.99,
        description: "El inicio de una saga mágica que marcó a una generación.",
        pictureUrl: "https://example.com/hp1.jpg",
        genre: "Fantasía",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 9,
        title: "El psicoanalista",
        price: 13.45,
        description: "Un thriller psicológico que mantiene en vilo hasta el final.",
        pictureUrl: "https://example.com/psico.jpg",
        genre: "Suspenso",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 10,
        title: "El señor de los anillos: La comunidad del anillo",
        price: 25.0,
        description: "La primera parte de la travesía para destruir el Anillo Único.",
        pictureUrl: "https://example.com/lotr1.jpg",
        genre: "Fantasía",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 11,
        title: "Rayuela",
        price: 16.0,
        description: "Una obra revolucionaria que rompe con las formas narrativas clásicas.",
        pictureUrl: "https://example.com/rayuela.jpg",
        genre: "Literatura",
        isPhysical: true,
        isEbook: false,
    },
    {
        id: 12,
        title: "La ladrona de libros",
        price: 11.75,
        description: "Una niña amante de los libros en la Alemania nazi.",
        pictureUrl: "https://example.com/ladrona.jpg",
        genre: "Histórica",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 13,
        title: "Asesinato en el Orient Express",
        price: 9.99,
        description: "El detective Poirot resuelve un crimen a bordo de un tren de lujo.",
        pictureUrl: "https://example.com/orient.jpg",
        genre: "Misterio",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 14,
        title: "It",
        price: 18.0,
        description: "Un grupo de amigos enfrenta una entidad maligna que cambia de forma.",
        pictureUrl: "https://example.com/it.jpg",
        genre: "Terror",
        isPhysical: true,
        isEbook: false,
    },
    {
        id: 15,
        title: "Frankenstein",
        price: 8.5,
        description: "El clásico de la ciencia ficción que explora los límites de la creación humana.",
        pictureUrl: "https://example.com/frankenstein.jpg",
        genre: "Clásico",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 16,
        title: "La sombra del viento",
        price: 16.99,
        description: "Un joven descubre un libro olvidado y una trama oscura lo envuelve.",
        pictureUrl: "https://example.com/sombra.jpg",
        genre: "Misterio",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 17,
        title: "La naranja mecánica",
        price: 10.25,
        description: "Una visión perturbadora de la violencia y la libertad individual.",
        pictureUrl: "https://example.com/orange.jpg",
        genre: "Ciencia ficción",
        isPhysical: true,
        isEbook: false,
    },
    {
        id: 18,
        title: "Las ventajas de ser invisible",
        price: 11.5,
        description: "Un adolescente introvertido escribe cartas sobre su vida y emociones.",
        pictureUrl: "https://example.com/invisible.jpg",
        genre: "Juvenil",
        isPhysical: false,
        isEbook: true,
    },
    {
        id: 19,
        title: "La carretera",
        price: 12.0,
        description: "Un padre y su hijo sobreviven en un mundo postapocalíptico.",
        pictureUrl: "https://example.com/carretera.jpg",
        genre: "Drama",
        isPhysical: true,
        isEbook: true,
    },
    {
        id: 20,
        title: "Un mundo feliz",
        price: 13.2,
        description: "Una sociedad futura donde todo está controlado para eliminar el sufrimiento.",
        pictureUrl: "https://example.com/feliz.jpg",
        genre: "Ciencia ficción",
        isPhysical: true,
        isEbook: true,
    },
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!categoryId) {
                resolve(products);
                return;
            }

            if (categoryId === "physical") {
                resolve(products.filter((product) => product.isPhysical));
                return;
            }

            if (categoryId === "ebook") {
                resolve(products.filter((product) => product.isEbook));
                return;
            }

            // Si no es un filtro de formato, asumimos que es un filtro por género
            resolve(products.filter((product) => product.genre.toLowerCase() === categoryId.toLowerCase()));
        }, 500);
    });
};

export const getSingleProduct = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.find((product) => product.id === Number(itemId))), 500);
    });
};

// Función para generar un título descriptivo según la categoría
export const getCategoryTitle = (categoryId) => {
    if (!categoryId) return "Todos los libros";

    if (categoryId === "physical") return "Libros físicos";
    if (categoryId === "ebook") return "Libros electrónicos";

    // Formatear el nombre de la categoría (primera letra mayúscula)
    return categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
};
