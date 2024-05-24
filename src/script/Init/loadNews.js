import { News } from "../Classes/News.js";

const JSON = require("../../data/news.json")
for(let element of JSON){

  new News(element.title, element.info, element.dato, element.tag, element.img);
}
console.log(JSON)
"/assets/images/news/free-delivery.jpg"


