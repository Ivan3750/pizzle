import { Product } from "../Classes/Product.js";
const data = require("../../data/products.json")

let Index = 0;
localStorage.setItem("lastIndex", Index);
    data.forEach(element => {
      new Product(element.id, element.name, 1, element.info, element.price, element.img, "Medium", element.weight[1])
      console.log(data)
      /* Створюємо продукт та публікуємо на сайт */
    });

