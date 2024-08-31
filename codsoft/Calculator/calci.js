function screenclear() {
    document.getElementById("res").value = "";
}
function display(value) {
    document.getElementById("res").value += value;
}
function calculate() {
    var p = document.getElementById("res").value;
    var q = eval(p);
    document.getElementById("res").value = q;
}