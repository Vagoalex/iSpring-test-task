import { UI } from './UI.js';
export { activeSlide, activeDot, activeFooter };

function activeSlide(n) {
	UI.slides.forEach(img => {
		img.classList.remove('slide--active');
	});
	UI.slides[n].classList.add('slide--active');
}

function activeDot(n) {
	const beginnersID = UI.dots[n].id == 'dot-beginners';
	const specialistsID = UI.dots[n].id == 'dot-specialists';
	const leadersID = UI.dots[n].id == 'dot-leaders';

	const slidesClasses = {
		beginners: 'dot--beginners',
		specialists: 'dot--specialists',
		leaders: 'dot--leaders',
	};

	UI.dots.forEach(dot => {
		dot.classList.remove('dot--active');

		dot.classList.remove(slidesClasses.beginners);
		dot.classList.remove(slidesClasses.specialists);
		dot.classList.remove(slidesClasses.leaders);
	});

	UI.dots.forEach(dot => {
		dot.classList.remove('dot--active');
	});

	if (beginnersID) {
		UI.dots[n].classList.add(slidesClasses.beginners);
	} else if (specialistsID) {
		UI.dots[n].classList.add(slidesClasses.specialists);
	} else if (leadersID) {
		UI.dots[n].classList.add(slidesClasses.leaders);
	}
}

function activeFooter(n) {
	const beginnersID = UI.dots[n].id == 'dot-beginners';
	const specialistsID = UI.dots[n].id == 'dot-specialists';
	const leadersID = UI.dots[n].id == 'dot-leaders';

	const slidesClasses = {
		beginners: 'logo--beginners',
		specialists: 'logo--specialists',
		leaders: 'logo--leaders',
	};

	UI.footerLogo.classList.remove(slidesClasses.beginners);
	UI.footerLogo.classList.remove(slidesClasses.specialists);
	UI.footerLogo.classList.remove(slidesClasses.leaders);

	if (beginnersID) {
		UI.footerLogo.classList.add(slidesClasses.beginners);
	} else if (specialistsID) {
		UI.footerLogo.classList.add(slidesClasses.specialists);
	} else if (leadersID) {
		UI.footerLogo.classList.add(slidesClasses.leaders);
	}
}
