const plantasDB = [
    {
        id: "A001",
        nombre: "Monstera Deliciosa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
        descripcion: "Planta tropical de grandes hojas verdes con agujeros.",
        precio: 25.99,
        stock: 15
    },
    {
        id: "A002",
        nombre: "Cactus San Pedro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Echinopsis_pachanoi_en_Huaraz.jpg/1024px-Echinopsis_pachanoi_en_Huaraz.jpg",
        descripcion: "Cactus columnar, ideal para ambientes áridos.",
        precio: 18.50,
        stock: 0
    },
    {
        id: "A003",
        nombre: "Suculenta Echeveria",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Rosa_de_alabastro_%28Echeveria_elegans%29%2C_jard%C3%ADn_del_molino%2C_Sierra_de_San_Felipe%2C_Set%C3%BAbal%2C_Portugal%2C_2012-05-11%2C_DD_01.JPG/1024px-Rosa_de_alabastro_%28Echeveria_elegans%29%2C_jard%C3%ADn_del_molino%2C_Sierra_de_San_Felipe%2C_Set%C3%BAbal%2C_Portugal%2C_2012-05-11%2C_DD_01.JPG",
        descripcion: "Planta de hojas carnosas que almacena agua.",
        precio: 8.99,
        stock: 50
    },
    {
        id: "A004",
        nombre: "Helecho Boston",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sa-fern.jpg/1024px-Sa-fern.jpg",
        descripcion: "Planta de interior con frondas colgantes y verdes.",
        precio: 12.75,
        stock: 10
    },
    {
        id: "A005",
        nombre: "Orquídea Phalaenopsis",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Phalaenopsis_amabilis_Orchi_03.jpg/1024px-Phalaenopsis_amabilis_Orchi_03.jpg",
        descripcion: "Planta de floración elegante, ideal para interiores.",
        precio: 55.99,
        stock: 0
    },
    {
        id: "A006",
        nombre: "Palmera Areca",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Areca_catechu_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-014.jpg",
        descripcion: "Palmera pequeña de hojas finas, perfecta para interiores.",
        precio: 45.00,
        stock: 12
    },
    {
        id: "A007",
        nombre: "Ficus Elastica",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/84/Ficus_elastica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-206.jpg",
        descripcion: "Planta de hojas gruesas y brillantes, resistente.",
        precio: 41.00,
        stock: 9
    },
    {
        id: "B001",
        nombre: "Potos Dorado",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
        descripcion: "Planta colgante fácil de cuidar, de hojas verdes con manchas doradas.",
        precio: 10.99,
        stock: 30
    },
    {
        id: "B002",
        nombre: "Aloe Vera",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
        descripcion: "Planta suculenta conocida por sus propiedades medicinales.",
        precio: 15.00,
        stock: 25
    },
    {
        id: "B003",
        nombre: "Bambú de la Suerte",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
        descripcion: "Planta decorativa y de buena fortuna, crece en agua.",
        precio: 5.50,
        stock: 40
    },
    {
        id: "B004",
        nombre: "Lavanda",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg",
        descripcion: "Planta aromática de flores moradas y relajantes.",
        precio: 12.99,
        stock: 18
    },
    // {
    //     id: 12,
    //     nombre: "Calathea Medallion",
    //     imagen: "calathea.jpg",
    //     descripcion: "Planta tropical con hojas vistosas y patrones llamativos.",
    //     precio: 20.99,
    //     stock: 14
    // },
    // {
    //     id: 13,
    //     nombre: "Zamioculca",
    //     imagen: "zamioculca.jpg",
    //     descripcion: "Planta resistente de hojas brillantes, ideal para poca luz.",
    //     precio: 24.99,
    //     stock: 7
    // },
    // {
    //     id: 14,
    //     nombre: "Drácena Marginata",
    //     imagen: "dracena_marginata.jpg",
    //     descripcion: "Planta de hojas largas y finas, ideal para interiores modernos.",
    //     precio: 17.75,
    //     stock: 11
    // },
    // {
    //     id: 15,
    //     nombre: "Crotón",
    //     imagen: "croton.jpg",
    //     descripcion: "Planta de hojas coloridas que varían entre rojo, amarillo y verde.",
    //     precio: 19.99,
    //     stock: 16
    // },
    // {
    //     id: 16,
    //     nombre: "Jade",
    //     imagen: "planta_jade.jpg",
    //     descripcion: "Planta suculenta de hojas pequeñas y carnosas.",
    //     precio: 13.50,
    //     stock: 35
    // },
    // {
    //     id: 17,
    //     nombre: "Begonia Rex",
    //     imagen: "begonia.jpg",
    //     descripcion: "Planta de hojas decorativas, con patrones plateados y bordes rojizos.",
    //     precio: 16.99,
    //     stock: 22
    // },
    // {
    //     id: 18,
    //     nombre: "Hiedra Inglesa",
    //     imagen: "hiedra.jpg",
    //     descripcion: "Planta trepadora de hojas verdes y forma lobulada.",
    //     precio: 9.50,
    //     stock: 45
    // },
    // {
    //     id: 19,
    //     nombre: "Flor de Pascua",
    //     imagen: "flor_pascua.jpg",
    //     descripcion: "Planta navideña con hojas rojas brillantes.",
    //     precio: 8.99,
    //     stock: 28
    // },
    // {
    //     id: 20,
    //     nombre: "Geranio",
    //     imagen: "geranio.jpg",
    //     descripcion: "Planta de exterior con flores coloridas y aromáticas.",
    //     precio: 7.99,
    //     stock: 50
    // }
];