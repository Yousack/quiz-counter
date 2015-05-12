function calc(status) {
    var e = document.getElementById("rule");
    var rule = e.options[e.selectedIndex].value;

    if (rule == 'nonx') {
        document.getElementById("point").innerHTML = document.getElementById("o").innerHTML;
    } else if (rule == 'updown') {
        if (status == 1) {
            var current = parseInt(document.getElementById("point").innerHTML);
            document.getElementById("point").innerHTML = current + parseInt(1);
        } else {
            document.getElementById("point").innerHTML = 0;
        }
    }
}

function o() {
    var current = parseInt(document.getElementById("o").innerHTML);
    document.getElementById("o").innerHTML = current + parseInt(1);
    calc(1);
}

function x() {
    var current = parseInt(document.getElementById("x").innerHTML);
    document.getElementById("x").innerHTML = current + parseInt(1);
    calc(0);
}

function reset() {
    document.getElementById("point").innerHTML = 0;
    document.getElementById("o").innerHTML = 0;
    document.getElementById("x").innerHTML = 0;
}
