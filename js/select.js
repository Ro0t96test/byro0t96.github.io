function sall() {
var input = document.getElementById('btnall');
select(input);
}

function shtml() {
var input = document.getElementById('btnhtml');
select(input);
}

function spy() {
var input = document.getElementById('btnpy');
select(input);
}

function sphp() {
var input = document.getElementById('btnphp');
select(input);
}

function sbash() {
var input = document.getElementById('btnbash');
select(input);
}

function select(input) {
    var input, filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
