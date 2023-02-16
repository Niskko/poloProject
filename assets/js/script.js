var firstUl = document.querySelector('.sidebar > div');

/**
 * Boucle sur les enfants de la balise "ul" dans la sidebar:
 * Si l'enfant est une balise "ul", on ajoute un listener sur le parent "li" et on cache la balise "ul"
 * Si le parent "li" a l'id "here", on affiche la balise "ul" et on ajoute la classe "active" au parent "li"
 * Si le parent "li" n'a pas l'id "here", on cache la balise "ul"
 * Si le parent "li" est cliqué, on vérifie si la balise "ul" est cachée ou non et on l'affiche ou on la cache en supprimant la classe active du parent "li"
 * Ainsi, "here" signifie qu'on est sur la page lié au bouton "li" et "active" signifie que le bouton "li" est cliqué
 */

for (let i = 0; i < firstUl.children.length; i++) {
	let current = firstUl.children[i];
	let FatherOfCurrent = firstUl.children[i - 1];

	//On vérifie si l'enfant est une balise "ul"
	if (current.nodeName == 'DIV') {
		//On vérifie si on se situe sur la page lié au bouton "li"
		if (FatherOfCurrent.id == 'here') {
			current.style.display = 'block';
			FatherOfCurrent.classList.add('sidebar--active');
		} else {
			current.style.display = 'none';
		}
		//On ajoute des listeners seulement sur les parents "li"
		FatherOfCurrent.addEventListener('click', function () {
			//On vérifie si la balise "ul" est cachée ou non
			if (current.style.display == 'none') {
				//On supprime la classe "sidebar--active" de tous les parents "li" et on cache toutes les balises "ul" puis on affiche la balise "ul" du bouton "li" cliqué
				for (let j = 0; j < firstUl.children.length; j++) {
					firstUl.children[j].classList.remove('sidebar--active');
					if (firstUl.children[j].nodeName == 'DIV') {
						firstUl.children[j].style.display = 'none';
					}
				}
				FatherOfCurrent.classList.add('sidebar--active');
				current.style.display = 'block';
			}
			//Si la balise "ul" était déjà affichée, on la cache et on supprime la classe "sidebar--active" du parent "li"
			else {
				FatherOfCurrent.classList.remove('sidebar--active');
				current.style.display = 'none';
			}
		});
	}
}

/**
 * Gestion du menu burger
 * Si le menu est ouvert, et qu'on clique sur le bouton ou le background, on le ferme
 * Si le menu est fermé, et qu'on clique sur le bouton, on l'ouvre
 */
var isOpen = false;
var background = document.querySelector('.graybackground');
background.style.display = 'none';
document
	.querySelector('.footer-menu__burger')
	.addEventListener('click', function () {
		if (isOpen) {
			closeMenu();
			return;
		}
		isOpen = true;
		document.querySelector('.sidebar').style.display = 'block';
		background.style.display = 'block';
		document.body.style.overflow = 'hidden';
		background.addEventListener('click', function () {
			closeMenu();
		});
	});

/**
 * Fonction qui ferme le menu
 */
function closeMenu() {
	isOpen = false;
	document.querySelector('.sidebar').style.display = 'none';
	background.style.display = 'none';
	document.body.style.overflow = 'auto';
}
