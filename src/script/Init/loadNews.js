import { News } from "../Classes/News.js";

fetch('../data/news.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let element of data){

      new News(element.title, element.info, element.dato, element.tag, element.img);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


