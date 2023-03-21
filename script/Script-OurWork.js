$(document).ready(function() {
	$('.gambar').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

const navBar = document.querySelector(".navbar");

window.addEventListener ("scroll", () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", positionWindow);
    sideBar.classList.remove("menu-active");
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("menu-active");
});