var slider = document.querySelector(".promo-slider");
var services = document.querySelector(".services");
var slide1 = slider.querySelector(".promo-slides-item:nth-child(1)");
var slide2 = slider.querySelector(".promo-slides-item:nth-child(2)");
var slide3 = slider.querySelector(".promo-slides-item:nth-child(3)");
var control1 = slider.querySelector(".slider-controls > li:nth-child(1) > .slider-btn");
var control2 = slider.querySelector(".slider-controls > li:nth-child(2) > .slider-btn");
var control3 = slider.querySelector(".slider-controls > li:nth-child(3) > .slider-btn");
var slide4 = services.querySelector(".service-item:nth-child(1)");
var slide5 = services.querySelector(".service-item:nth-child(2)");
var slide6 = services.querySelector(".service-item:nth-child(3)");
var control4 = services.querySelector(".service-buttons > li:nth-child(1) > .service-btn");
var control5 = services.querySelector(".service-buttons > li:nth-child(2) > .service-btn");
var control6 = services.querySelector(".service-buttons > li:nth-child(3) > .service-btn");




	control1.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide1.classList.contains("current-slide")) {
			slide1.classList.add("current-slide");
			control1.classList.add("slider-btn-current");
			slide2.classList.remove("current-slide");
			control2.classList.remove("slider-btn-current");
			slide3.classList.remove("current-slide");
			control3.classList.remove("slider-btn-current");
		}
	});

	control2.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide2.classList.contains("current-slide")) {
			slide2.classList.add("current-slide");
			control2.classList.add("slider-btn-current");
			slide1.classList.remove("current-slide");
			control1.classList.remove("slider-btn-current");
			slide3.classList.remove("current-slide");
			control3.classList.remove("slider-btn-current");
		}
	});

	control3.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide3.classList.contains("current-slide")) {
			slide3.classList.add("current-slide");
			control3.classList.add("slider-btn-current");
			slide2.classList.remove("current-slide");
			control2.classList.remove("slider-btn-current");
			slide1.classList.remove("current-slide");
			control1.classList.remove("slider-btn-current");
		}
	});

	control4.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide4.classList.contains("service-item-current")) {
			slide4.classList.add("service-item-current");
			control4.classList.add("service-btn-current");
			slide5.classList.remove("service-item-current");
			control5.classList.remove("service-btn-current");
			slide6.classList.remove("service-item-current");
			control6.classList.remove("service-btn-current");
		}
	});

	control5.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide5.classList.contains("service-item-current")) {
			slide5.classList.add("service-item-current");
			control5.classList.add("service-btn-current");
			slide4.classList.remove("service-item-current");
			control4.classList.remove("service-btn-current");
			slide6.classList.remove("service-item-current");
			control6.classList.remove("service-btn-current");
		}
	});

	control6.addEventListener("click", function(event) {
		event.preventDefault();
		if (! slide6.classList.contains("service-item-current")) {
			slide6.classList.add("service-item-current");
			control6.classList.add("service-btn-current");
			slide5.classList.remove("service-item-current");
			control5.classList.remove("service-btn-current");
			slide4.classList.remove("service-item-current");
			control4.classList.remove("service-btn-current");
		}
	});
