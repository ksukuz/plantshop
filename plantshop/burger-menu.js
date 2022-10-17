document.getElementById("mob-menu").onclick = function() {open()};

function open() {
    document.getElementById("nav").classList.toggle('show');
    document.getElementById("mob-menu").classList.toggle('mob-open');
}