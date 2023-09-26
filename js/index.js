/*--------------------------------------------------------------*\
  #Carousel
\*--------------------------------------------------------------*/ 
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const slides = document.querySelector(".slides")
const imgs = document.querySelectorAll(".slide")
const indicators = document.querySelectorAll(".slide-indicator");

let index = 0;
let width = imgs[index].clientWidth;

// Configuration de l'état initial du carrousel
document.addEventListener("DOMContentLoaded", function() {
  updateButtonState()
  updateCarouselState()
  updateIndicators()
});


// Active ou désactive les boutons "précédent" et "suivant" en fonction de l'index
function updateButtonState() {
   prev.classList.toggle("disable", index === 0);
   next.classList.toggle("disable", index === imgs.length - 1);
}

// Fonction pour gérer la navigation suivante
function navigateNext() {
  index++;
  updateButtonState()
  updateCarouselState();
  updateIndicators();
}

// Fonction pour gérer la navigation précédente
function navigatePrev() {
  index--;
  updateButtonState()
  updateCarouselState();
  updateIndicators();
}

next.addEventListener("click", () => navigateNext());
prev.addEventListener("click", () => navigatePrev());

// Permet de mettre à jour l'état du caroussel
function updateCarouselState() {
  slides.style.transform = `translate(${-index * (width + 16)}px`;

  // Met à jour les attributs aria-hidden des diapositives
  imgs.forEach((img, i) => {
    if (i === index) {
      img.setAttribute("aria-hidden", "false"); 
    } else {
      img.setAttribute("aria-hidden", "true"); 
    }
  });
}


// Gestion du clavier (touches "Entrée" et "Espace") lorsque le focus est sur le bouton "suivant"
next.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (index === imgs.length - 1) {
      // Si nous sommes sur la dernière diapositive, ne faites rien
      return;
    }
    // Sinon, permet le défilement vers la droite
    navigateNext();
  }
});

// Gestion du clavier(touches "Entrée" et "Espace") lorsque le focus est sur le bouton "précédent"
prev.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (index === 0) {
      // Si nous sommes sur la première diapositive, ne faites rien
      return;
    }
    // Sinon, permet le défilement vers la gauche
    navigatePrev();
  }
});


/* Gestion des indicateurs de diapositives*/

function updateIndicators() {
  // Met à jour l'indicateur active
  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active"); 
    indicator.setAttribute("aria-selected", "false"); 

    if (i === index) {
      indicator.removeAttribute("tabindex"); 
    } else {
      indicator.setAttribute("tabindex", "-1"); 
    }
  }); 
  indicators[index].classList.add("active");
  indicators[index].setAttribute("aria-selected", "true"); 

  // Le premier indicateur a aria-selected="true" lorsque la page se charge
  if (index === 0) {
    indicators[0].setAttribute("aria-selected", "true"); 
  }
}

// Ajoute un gestionnaire d'événement pour chaque indicateur de diapositive
indicators.forEach((indicator, indicatorIndex) => {
  indicator.addEventListener("click", () => {
    index = indicatorIndex; // Mets à jour l'index en fonction de l'indicateur cliqué et change l'image
    updateButtonState()
    updateCarouselState();
    updateIndicators()
  });

  // Gestion du clavier (touches "Entrée" et "Espace") losrque le focus est sur un indicateur
  indicator.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      index = indicatorIndex; // Mets à jour l'index en fonction de l'indicateur cliqué et change l'image
      updateCarouselState();
      updateIndicators()
    }
  });
});
/* Fin indicateurs de diapositives*/


// Ajoute un gestionnaire d'événements pour l'événement de redimensionnement de la fenêtre
window.addEventListener("resize", () => {
  // Recalcule la largeur des images en fonction de la première image
  width = imgs[0].clientWidth;

  // Mets à jour la position du carrousel en fonction de l'index actuel
  slides.style.transform = `translate(${-index * (width + 16)}px`;
});