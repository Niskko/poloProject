var templateCard = document.querySelector('#card-0');
var parentCard = document.querySelector('.card-Carrousel');
var inputSearch = document.querySelector('.searching-menu input');
var id = 1;

inputSearch.addEventListener('keyup', function () {
	displayCard();
});
displayCard();

/**
 * Affichage des cartes patients selon la recherche
 */
function displayCard() {
	while (parentCard.children.length > 1) {
		parentCard.children[1].remove();
	}
	for (data of dataPatient.patient) {
		if (inputSearch.value != '' && inputSearch.value != null) {
			let input = friendlyString(inputSearch.value.toLowerCase());
			let firstName = friendlyString(data.firstName.toLowerCase());
			let lastName = friendlyString(data.lastName.toLowerCase());
			if (firstName.startsWith(input) || lastName.startsWith(input)) {
				createCard(
					data.firstName,
					data.lastName,
					data.avatar,
					data.age,
					data.phone,
					data.email,
					data.postalCode,
					data.address,
					data.city
				);
			}
		} else {
			createCard(
				data.firstName,
				data.lastName,
				data.avatar,
				data.age,
				data.phone,
				data.email,
				data.postalCode,
				data.address,
				data.city
			);
		}
	}
}

/**
 * Création d'une carte patient
 */
function createCard(
	firstName,
	lastName,
	avatar,
	age,
	phone,
	email,
	postalCode,
	address,
	city
) {
	let card = templateCard.cloneNode(true);
	card.id = `card-${id}`;
	parentCard.appendChild(card);

	// Nom + Prénom
	if (verifString(firstName) && verifString(lastName)) {
		document.querySelector(
			`#card-${id} #card-name`
		).textContent = `${firstName} ${lastName}`;
	}

	// Avatar
	if (verifString(avatar)) {
		document.querySelector(`#card-${id} #card-avatar`).src = avatar;
	}

	// Age
	if (verifString(age)) {
		document.querySelector(`#card-${id} #card-age`).textContent =
			age + ' ans';
	}

	// Téléphone
	if (verifString(phone)) {
		document.querySelector(`#card-${id} #card-phone`).textContent = phone;
	}

	// Email
	if (verifString(email)) {
		document.querySelector(`#card-${id} #card-email`).textContent = email;
	}

	// Code postal + Ville
	if (verifString(postalCode) && verifString(city)) {
		document.querySelector(
			`#card-${id} #card-city`
		).textContent = `${postalCode} ${city}`;
	}

	// Adresse
	if (verifString(address)) {
		document.querySelector(`#card-${id} #card-address`).textContent =
			address;
	}
	id++;
}

/**
 * Remplace les caractères spéciaux par des caractères normaux
 * @returns une String sans caractères spéciaux
 */
function friendlyString(string) {
	return string
		.replaceAll('é', 'e')
		.replaceAll('è', 'e')
		.replaceAll('ê', 'e')
		.replaceAll('ë', 'e')
		.replaceAll('à', 'a')
		.replaceAll('â', 'a')
		.replaceAll('ä', 'a')
		.replaceAll('î', 'i')
		.replaceAll('ï', 'i')
		.replaceAll('ô', 'o')
		.replaceAll('ö', 'o')
		.replaceAll('ù', 'u')
		.replaceAll('û', 'u')
		.replaceAll('ü', 'u')
		.replaceAll('ç', 'c')
		.replaceAll(' ', '');
}

/**
 * Vérifie si une chaîne de caractère est vide ou nulle
 * @returns un booléen
 */
function verifString(string) {
	if (string != null && string != undefined && string != '') {
		return true;
	}
	return false;
}
