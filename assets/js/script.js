var firstUl = document.querySelector('.sidebar > ul');

for (let i = 0; i < firstUl.children.length; i++) {
	let current = firstUl.children[i];
	let FatherOfCurrent = firstUl.children[i - 1];

	if (current.nodeName == 'UL') {
		current.style.display = 'none';
		FatherOfCurrent.addEventListener('click', function () {
			if (current.style.display == 'none') {
				for (let j = 0; j < firstUl.children.length; j++) {
					firstUl.children[j].classList.remove('active');
					if (firstUl.children[j].nodeName == 'UL') {
						firstUl.children[j].style.display = 'none';
					}
				}
				FatherOfCurrent.classList.add('active');
				current.style.display = 'block';
			} else {
				FatherOfCurrent.classList.remove('active');
				current.style.display = 'none';
			}
		});
	}
}
