const BODY = document.querySelectorAll("body")[0]
const BURGER = document.querySelector("#burger")
const BURGER_ICO = document.querySelector("#burger > i")
const MENU = document.querySelector("#navbar")

BODY.onresize = js_querie
BURGER.onclick = menu_logic

function menu_logic() {
    if (MENU.style.display == "none" || MENU.style.display == "") {
        open_menu()
    } else if (MENU.style.display == "block") {
        close_menu()
    }
}z

function js_querie() {
    if (window.innerWidth >= 740) {
        open_menu()
    } else if (window.innerWidth < 740) {
        close_menu()
    }
}

function open_menu() {
    MENU.style.display = "block"
    BURGER_ICO.innerText = "close"
}

function close_menu() {
    MENU.style.display = "none"
    BURGER_ICO.innerText = "menu"
}
