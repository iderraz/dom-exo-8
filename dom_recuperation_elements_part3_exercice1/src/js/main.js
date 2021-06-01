// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let monh2 = document.querySelector("h2");
console.log(monh2.innerText);
// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
monh2.textContent = "Exercice 1"
console.log(monh2);
// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
let p = monh2.nextElementSibling;
p.textContent = "js utilisé pour résoudre l'exercice 2."
// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let section1 = document.querySelector("section");
let nomId = section1.getAttribute("id");
console.log(nomId);
// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let monh1 = document.querySelector(".text-warning");
console.log(monh1.className);
console.log(monh1.classList);
// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let allH1 = Array.from(document.querySelectorAll("h1"));
console.log(allH1);
allH1.forEach(element => {
   let elm =  element.getAttribute("class");
    console.log(elm);
});
// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
let myInput = document.querySelector("input");
console.log(myInput.attributes);

// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
let input1 = document.querySelector("input");
let recup = input1.getAttribute("type");
console.log(recup);
// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
let input2 = document.querySelectorAll("input")[1];
input2.setAttribute("type", "password");
console.log(input2);
// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
let firstInput = document.querySelector("input");
firstInput.setAttribute("type", "color");
console.log(firstInput);
