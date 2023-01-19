let myh1 = document.querySelector('h1');
myh1.textContent = "Les attributs class et id";
myh1.id="BigTitle"


let myh2 = document.querySelector('h2');
myh2.textContent = "Exercice 2 partie A";

let my2h2 = document.querySelectorAll('h2')[1];
my2h2.textContent = "Exercice 2 partie B";

let para1 = document.querySelector('p');
para1.textContent = " L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ";

let para2 = document.querySelectorAll('p')[1];
para2.textContent = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

let myDiv = document.querySelector("div");
myDiv.setAttribute("class","container")

let allh2 = document.querySelectorAll("h2");
allh2.forEach(allh2 => {
    allh2.setAttribute("class","title")
});

let allpara = document.querySelectorAll("p");
allpara.forEach(allpara => {
    allpara.setAttribute("class","text")
});

let sec1 = document.querySelector("section");
sec1.setAttribute("class"," margin-bottom border-black padding")

let sec2 = document.querySelectorAll("section")[1];
sec2.setAttribute("class","margin-top border-black padding")

let mydiv2 = document.querySelectorAll("div")[1];
let style = "background-color: blue; border: 1px solid black; height: 20px; width: 20px;"

mydiv2.setAttribute("style", "background-color: blue; border: 1px solid black; height: 20px; width: 20px;")