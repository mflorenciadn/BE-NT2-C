const cupcakes = [
  {
    title: "Cookies",
    category: "classic",
    description:
      "Suave pastelito con trozos de galleta oreo acompañado por una crema ligera con pedacitos de galleta.",
    id: 1,
    image: require("../assets/images/flavors/cookies.png"),
    price: 125,
    stock: 0,
  },
  {
    title: "Limón",
    category: "classic",
    description:
      "Delicado pastel sabor limón, con crema hecha a base de curd de limón.",
    id: 2,
    image: require("../assets/images/flavors/limon.png"),
    price: 110,
    stock: 13,
  },
  {
    title: "Chocolate",
    category: "classic",
    description:
      "Esponjosa torta de chocolate hecha con cocoa Hersheys, cubierto con una suave crema de chocolate.",
    id: 3,
    image: require("../assets/images/flavors/chocolate.png"),
    price: 150,
    stock: 2,
  },
  {
    title: "Menta",
    category: "classic",
    description:
      "Crema de refrescante menta sobre húmedo bizcocho de chocolate amargo con chips de chocolate.",
    id: 4,
    image: require("../assets/images/flavors/menta.png"),
    price: 80,
    stock: 50,
  },
  {
    title: "Frambuesa",
    category: "premium",
    description:
      "Completamente libre de gluten, el principal rol en la masa lo juega la harina de almendras. Un snack saludable que puedes utilizar como colación, para antes de ir al gym o para un postrecito delicioso.",
    id: 5,
    image: require("../assets/images/flavors/frambuesa.png"),
    price: 100,
    stock: 10,
  },
  {
    title: "Vainilla",
    category: "classic",
    description: "Tradicional torta de vainilla casera, con crema chantilly",
    id: 6,
    image: require("../assets/images/flavors/vainilla.png"),
    price: 100,
    stock: 10,
  },
];

export default cupcakes;
