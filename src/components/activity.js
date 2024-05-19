document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.header__bottom-button');
	const blocks = document.querySelectorAll('.content-block');

	buttons.forEach(button => {
			button.addEventListener('click', function() {
					const targetId = button.getAttribute('data-target');

					blocks.forEach(block => {
							if (block.id === targetId) {
									block.classList.add('active');
									block.style.display = 'flex';
							} else {
									block.classList.remove('active');
									block.style.display = 'none';
							}
					});

					buttons.forEach(btn => {
							if (btn === button) {
									btn.classList.add('active');
							} else {
									btn.classList.remove('active');
							}
					});
			});
	});
});
