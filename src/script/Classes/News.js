const newsBlock = document.querySelector('.news-block');

export class News {
    constructor(title, info, dato, tag = none, img){
        this.title = title;
        this.info = info;
        this.dato = dato;
        this.tag = tag;
        this.img = img;

        let newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        
        let newsImg = document.createElement("img");
        newsImg.classList.add("news-img");

        newsImg.src = require(`../../assets/images/news/${this.img}`)
        

        let newsBox = document.createElement("div")
        newsBox.classList.add("news-box");
        
        let newsTitle = document.createElement("h4");
        newsTitle.classList.add("news-title");
        newsTitle.innerHTML = this.title
        
        let newsInfo = document.createElement("p");
        newsInfo.classList.add("news-info");
        newsInfo.innerHTML = this.info
        
        let newsDato = document.createElement("p");
        newsDato.classList.add("news-dato");
        newsDato.innerHTML = this.dato
        
        newsBlock.append(newsCard)
        newsCard.append(newsImg,newsBox)
        newsBox.append( newsTitle, newsInfo, newsDato)

    }
    
}