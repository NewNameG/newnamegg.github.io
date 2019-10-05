// Функция для адаптивного меню

document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("adaptive__menu").classList.toggle("show");
}

// Функция для смены цвета фона при клике на кноки

function changeBg() {
    document.querySelector(".target").style.background = "#FF9500";
};

function changeBg2() {
    document.querySelector(".target").style.background = "#c97940";
};
