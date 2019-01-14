var btn = document.querySelector("#btn3")
var webDev = document.querySelector("#webdev")
var msgReady = document.querySelector("#message")

btn3.addEventListener("mouseover", func, false);

function func() {
    webDev.setAttribute("style", "display:none;")
    msgReady.setAttribute("style", "display:block;")
}

btn3.addEventListener("mouseout", func1, false);

function func1() {
    msgReady.setAttribute("style", "display:none;")
    webDev.setAttribute("style", "display:block;")
}