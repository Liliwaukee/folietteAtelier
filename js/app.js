function loadPage() {
  $('.slider').slider();$(".button-collapse").sideNav();$('.collapsible').collapsible();
}
$(document).ready(loadPage);

jQuery("#gallery").unitegallery({
	gallery_theme: "grid",
	theme_panel_position: "right"
});
