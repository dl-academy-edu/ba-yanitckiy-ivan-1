var contact = document.querySelector(".slider__button");
var popup = document.querySelector(".form__container");
var close = document.querySelector(".form__close");
var products = document.querySelectorAll(".products__item");
var titles = document.querySelectorAll(".products__title");

contact.addEventListener("click", function () {
	popup.classList.remove("form__container_close");
	document.querySelector("#contact_name").focus();
});

close.addEventListener("click", function () {
	popup.classList.add("form__container_close");
	contact.focus();
});