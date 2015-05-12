function calc() {
    document.getElementById("point").innerHTML = document.getElementById("o").innerHTML;
}

function o() {
    var current = parseInt(document.getElementById("o").innerHTML);
    document.getElementById("o").innerHTML = current + parseInt(1);
    calc();
}

function x() {
    var current = parseInt(document.getElementById("x").innerHTML);
    document.getElementById("x").innerHTML = current + parseInt(1);
    calc();
}

function reset() {
    document.getElementById("point").innerHTML = 0;
    document.getElementById("o").innerHTML = 0;
    document.getElementById("x").innerHTML = 0;
}
