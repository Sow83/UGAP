# UGAP

Toute la page est accessible, à l'exception du niveau de contraste entre les couleurs utilisées
pour le titre "Nos engagements" et le texte final du footer, qui mentionne que "L’UGAP adhère au
code de déontologie de la Fevad et au système de Médiation du e-commerce". Ce contraste ne respecte
pas les critères d'accessibilité, en particulier le Critère de succès 1.4.3 Contraste (minimum).
Cependant, je n'ai pas modifié les couleurs pour rester conforme à la maquette.


La page est responsive et codée en "mobile first". J'ai utilisé les unités "rem" pour améliorer l'accessibilité, 
ce qui permet aux utilisateurs de modifier la taille de la police dans leur navigateur sans perturber de manière
disproportionnée la mise en page.


J'ai également veillé à utiliser des balises HTML sémantiquement appropriées, y compris la balise 'meta description',
afin de respecter les bonnes pratiques en matière de référencement naturel.


En ce qui concerne les effets de survol, bien que cela ne soit pas demandé dans les consignes,
j'ai décidé de les inclure par souci d'amélioration esthétique. En espérant que cela ne vous dérange pas.


J'ai codé le carrousel en pur javascript sans utiliser de bibliothèque. 
Pour le rendre accessible, j’ai mis en place les éléments suivants :

	role="tablist" est appliqué sur l'élément englobant les indicateurs de diapositives.
	role="tab" est appliqué sur chaque indicateur de diapositives.
	tabindex="-1" est appliqué aux indicateurs de diapositives non sélectionnés pour que ces éléments 	ne soient pas atteignables pour un utilisateur navigant au clavier.
	aria-selected="true" est appliqué sur l’indicateur de diapositives sélectionné.
	aria-selected="false" est appliqué sur les autres indicateurs de diapositives non sélectionnés.
	aria-hidden="false" est appliqué sur le slide affiché.
	aria-hidden="true" est appliqué sur les autres slides non affichés.
	aria-roledescription indique que c’est un slide.
	aria-label permet d’identifier le numéro courant du slide et le nombre total de slides.
	aria-controls relie les boutons et les éléments qu’ils contrôlent (indicateurs de slides, boutons 	« précédent » et « suivant »).


