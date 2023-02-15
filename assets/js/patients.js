var templateCard = document.querySelector('#card-0');
var parentCard = document.querySelector('.card-Carrousel');
var id = 1;
console.log(dataPatient.patient.length);
for (data of dataPatient.patient) {
	let card = templateCard.cloneNode(true);
	card.id = `card-${id}`;
	parentCard.appendChild(card);

	// Nom + Prénom
	if (
		data.firstName != null &&
		data.firstName != undefined &&
		data.firstName != '' &&
		data.lastName != null &&
		data.lastName != undefined &&
		data.lastName != ''
	) {
		document.querySelector(
			`#card-${id} #card-name`
		).textContent = `${data.firstName} ${data.lastName}`;
	}

	// Avatar
	if (data.avatar != null && data.avatar != undefined && data.avatar != '') {
		document.querySelector(`#card-${id} #card-avatar`).src = data.avatar;
	}

	// Age
	if (data.age != null && data.age != undefined && data.age != '') {
		document.querySelector(`#card-${id} #card-age`).textContent = data.age;
	}

	// Téléphone
	if (data.phone != null && data.phone != undefined && data.phone != '') {
		document.querySelector(`#card-${id} #card-phone`).textContent =
			data.phone;
	}

	// Email
	if (data.email != null && data.email != undefined && data.email != '') {
		document.querySelector(`#card-${id} #card-email`).textContent =
			data.email;
	}

	// Code postal + Ville
	if (
		data.postalCode != null &&
		data.postalCode != undefined &&
		data.postalCode != '' &&
		data.city != null &&
		data.city != undefined &&
		data.city != ''
	) {
		document.querySelector(
			`#card-${id} #card-city`
		).textContent = `${data.postalCode} ${data.city}`;
	}

	// Adresse
	if (
		data.address != null &&
		data.address != undefined &&
		data.address != ''
	) {
		document.querySelector(`#card-${id} #card-address`).textContent =
			data.address;
	}

	id++;
}
