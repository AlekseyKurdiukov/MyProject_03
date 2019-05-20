var link = document.querySelector(".login_link");
var popup = document.querySelector(".modal_login");
var close = document.querySelector(".btn_close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
  popup.classList.add("modal_spull");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");
  popup.classList.remove("modal_spull");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal_spull");
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error");
      popup.classList.remove("modal_spull");
    }
  }
});
