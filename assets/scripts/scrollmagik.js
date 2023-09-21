var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: ".box", // Елемент, який викликає анімацію
	triggerHook: 0.5, // Момент прокрутки, коли анімація відбудеться (0 - початок, 1 - кінець)
	reverse: true // Анімація відбудеться лише при прокрутці вниз
})
	.setClassToggle(".box", "fade-in") // Додати/видалити клас при прокрутці
	.addTo(controller); // Додати сцену до контролера
