function calc(status) {
    var e = document.getElementById("rule");
    var rule = e.options[e.selectedIndex].value;

    var point = parseInt(document.getElementById("point").innerHTML);

    if (rule == 'nonx') {
        document.getElementById("point").innerHTML = document.getElementById("o").innerHTML;
    } else if (rule == 'updown') {
        if (status == 1) {
            document.getElementById("point").innerHTML = point + parseInt(1);
        } else {
            document.getElementById("point").innerHTML = 0;
        }
    } else if (rule == 'pnmn') {
        if (status == 1) {
            document.getElementById("point").innerHTML = point + parseInt(document.getElementById("o-point").value);
        } else {
            document.getElementById("point").innerHTML = point - parseInt(document.getElementById("x-point").value);
        }
    }
}

function o() {
    var oPoint = parseInt(document.getElementById("o").innerHTML);
    document.getElementById("o").innerHTML = oPoint + parseInt(1);
    document.getElementById("history").innerHTML += '○';
    calc(1);
}

function x() {
    var xPoint = parseInt(document.getElementById("x").innerHTML);
    document.getElementById("x").innerHTML = xPoint + parseInt(1);
    document.getElementById("history").innerHTML += '×';
    calc(0);
}

function reset() {
    document.getElementById("point").innerHTML = 0;
    document.getElementById("o").innerHTML = 0;
    document.getElementById("x").innerHTML = 0;
    document.getElementById("history").innerHTML = '履歴：';

    var e = document.getElementById("rule");
    var rule = e.options[e.selectedIndex].value;

    if (rule == 'pnmn') {
        document.getElementById("o-point").value = "1";
        document.getElementById("x-point").value = "1";
    }
}
