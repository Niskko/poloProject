var firstDiv = document.querySelector('.sidebar > div');

/**
 * Boucle sur les enfants de la balise "div" dans la sidebar:
 * Si l'enfant est une balise "div", on ajoute un listener sur le parent "p" et on cache la balise "div"
 * Si le parent "p" a l'id "here", on affiche la balise "div" et on ajoute la classe "active" au parent "p"
 * Si le parent "p" n'a pas l'id "here", on cache la balise "div"
 * Si le parent "p" est cliqué, on vérifie si la balise "div" est cachée ou non et on l'affiche ou on la cache en supprimant la classe active du parent "p"
 * Ainsi, "here" signifie qu'on est sur la page lié au bouton "p" et "active" signifie que le bouton "p" est cliqué
 */

for (let i = 0; i < firstDiv.children.length; i++) {
	let current = firstDiv.children[i];
	let FatherOfCurrent = firstDiv.children[i - 1];

	//On vérifie si l'enfant est une balise "div"
	if (current.nodeName == 'DIV') {
		//On vérifie si on se situe sur la page lié au bouton "p"
		if (FatherOfCurrent.id == 'here') {
			current.style.display = 'block';
			FatherOfCurrent.classList.add('sidebar--active');
		} else {
			current.style.display = 'none';
		}
		//On ajoute des listeners seulement sur les parents "p"
		FatherOfCurrent.addEventListener('click', function () {
			//On vérifie si la balise "div" est cachée ou non
			if (current.style.display == 'none') {
				//On supprime la classe "sidebar--active" de tous les parents "p" et on cache toutes les balises "div" puis on affiche la balise "div" du bouton "p" cliqué
				for (let j = 0; j < firstDiv.children.length; j++) {
					firstDiv.children[j].classList.remove('sidebar--active');
					if (firstDiv.children[j].nodeName == 'DIV') {
						firstDiv.children[j].style.display = 'none';
					}
				}
				FatherOfCurrent.classList.add('sidebar--active');
				current.style.display = 'block';
			}
			//Si la balise "div" était déjà affichée, on la cache et on supprime la classe "sidebar--active" du parent "p"
			else {
				FatherOfCurrent.classList.remove('sidebar--active');
				current.style.display = 'none';
			}
			placeHere();
		});
	}
}

var here = document.createElement('div');
/**
 * Fonction qui place une div pour indiquer sur quelle page on se trouve selon l'emplacement de l'id "here"
 */
function placeHere() {
	let numberHere = 0;
	for (let i = 0; i < firstDiv.children.length; i++) {
		let current = firstDiv.children[i];
		if (current.id == 'here') {
			numberHere++;
			here.classList.add('here');
			here.style.left = current.offsetLeft - 50 + 'px';
			here.style.top = current.offsetTop + 'px';
			document.body.appendChild(here);
		}
	}
	if (numberHere != 1) {
		here.style.display = 'none';
		console.error('Il y a ' + numberHere + ' éléments avec l\'id "here"');
	}
}
placeHere();

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
