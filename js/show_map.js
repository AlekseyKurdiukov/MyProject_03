var link_map = document.querySelector(".map_link");
var popup_map = document.querySelector(".modal_map");
var close_map = document.querySelector(".btn_map_close");

link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("modal_show");
  popup_map.classList.add("modal_spull");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove("modal_show");
  popup_map.classList.remove("modal_spull");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup_map.classList.contains("modal_show")) {
      popup_map.classList.remove("modal_show");
      popup_map.classList.remove("modal_spull");
    }
  }
});
