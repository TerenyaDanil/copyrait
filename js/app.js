


let video = gsap.timeline({
	scrollTrigger: {
		trigger: ".video",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	video.from(".video__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".video__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".wrap-video__video", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.4")
		.from(".wrap-video__text", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".wrap-video__line", { duration: 0.9, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")

		.from(".content-video__item-1", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".content-video__item-2", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
} else {
	video.from(".video__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".video__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".wrap-video__video", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.4")
		.from(".wrap-video__text", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


		.from(".content-video__item-1", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".content-video__item-2", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}

//////////////////////////////////////////////


let program = gsap.timeline({
	scrollTrigger: {
		trigger: ".program",   // pin the trigger element while active
		start: "top center",

	}
});

if (window.innerWidth > 737) {
	program.from(".program__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".program__subtitle", { duration: 0.9, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".program__text", { duration: 0.9, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".get-program__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".get-program__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".get-program__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for-program__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for-program__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".program__btn", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


} else {
	program.from(".program__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: -100 }, "+=0.2")
		.from(".program__subtitle", { duration: 0.9, ease: "power4.out", opacity: 0, y: -50 }, "-=0.6")
		.from(".program__text", { duration: 0.9, ease: "power4.out", opacity: 0, y: -50 }, "-=0.6")
		.from(".get-program__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".get-program__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".get-program__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for-program__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for-program__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".program__btn", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}

///////////////////////////////////////////////


let conclusion = gsap.timeline({
	scrollTrigger: {
		trigger: ".conclusion",   // pin the trigger element while active
		start: "top center",

	}
});

if (window.innerWidth > 737) {
	conclusion.from(".conclusion__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".inner-conclusion__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-conclusion__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-conclusion__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



} else {
	conclusion.from(".conclusion__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")

}

///////////////////////////////////////////////


let form = gsap.timeline({
	scrollTrigger: {
		trigger: ".form",   // pin the trigger element while active
		start: "top center",

	}
});

if (window.innerWidth > 737) {
	form.from(".form__title-1", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".form__text-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-4", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

} else {
	form.from(".form__title-1", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".form__text-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-4", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}

///////////////////////////////////////////////


let formSec = gsap.timeline({
	scrollTrigger: {
		trigger: ".form-sec",   // pin the trigger element while active
		start: "top center",

	}
});

if (window.innerWidth > 737) {
	formSec.from(".form__title-sec", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".form__text-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-1-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-2-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-3-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-4-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

} else {
	formSec.from(".form__title-sec", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".form__text-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-1-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-2-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-3-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".form__item-4-sec", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}

///////////////////////////////////////////////


let after = gsap.timeline({
	scrollTrigger: {
		trigger: ".after",   // pin the trigger element while active
		start: "top center",

	}
});

if (window.innerWidth > 737) {
	after.from(".after__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
		.from(".inner-after__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-after__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-after__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".after__img", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


} else {
	after.from(".after__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".inner-after__item-1", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-after__item-2", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-after__item-3", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".after__img", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}







///////////////////////////////////////////////

let footer = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",   // pin the trigger element while active
		start: "top bottom"

	}
});


if (window.innerWidth > 737) {
	footer.from(".footer__logo", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "+=0.2")

		.from(".footer__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



} else {
	footer.from(".footer__logo", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")

		.from(".footer__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}