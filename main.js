
/* Exercice : 
Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut) : done
En JS, sélectionnez les "cartes" créées en HTML : done 
Pour chaque carte, faites un event listener sur le click : done
Sélectionnez dans la carte cliquée, le bouton masqué : done 
Affichez le bouton : done 
*/

const allCards = document.querySelectorAll('.card')

allCards.forEach((card) => {
    card.addEventListener("click", () => {
    const available = card.querySelector(".available")
    available.style.display = "block"
    })
})