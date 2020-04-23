function clic() {

  var body = document.body;
  body.classList.toggle("body-dark-mode");

  var container = document.getElementById('container');
  container.classList.toggle("container-dark-mode");

  var myBtn = document.getElementById('myBtn');
  myBtn.classList.toggle("myBtn-dark-mode");

  var myInput = document.getElementById('myInput');
  myInput.classList.toggle("myInput-dark-mode");

  var header = document.getElementById('header');
  header.classList.toggle("header-dark-mode");

  var footer = document.getElementById('footer');
  footer.classList.toggle("footer-dark-mode");


var blockquote = document.getElementsByClassName('blockquoteddrk');
for (var i = 0; i < blockquote.length; i++) {
  var darck = blockquote [i];
  darck.classList.toggle("blockquote-dark-mode");
}

var button = document.getElementsByClassName('button');
for (var i = 0; i < button.length; i++) {
  var darck = button [i];
  darck.classList.toggle("button-dark-mode");
}
}



function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
       clic();
       document.getElementById('switcher').checked = true;
  } else {
       document.getElementById('switcher').checked = false;
    }
}

function darkmode(){
    if (localStorage.getItem('theme') === 'light') {
       localStorage.setItem("theme", "dark");
       document.documentElement.className = "dark";
       clic();

  } else {
       localStorage.setItem("theme", "light");
       document.documentElement.className = "light";
       clic();
    }
}

toggleTheme();

