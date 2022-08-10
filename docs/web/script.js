var btnmod, clipboard;
var url = document.getElementById('url');
url.addEventListener("input", function() {
  if (url.value == 0) {
    btnmod = 1;
  } else {
    btnmod = 0;
  };
  console.log('btnmod =', btnmod, '| value = \"'.concat(url.value, '\"'));
});
document.getElementById('btn-right').addEventListener("click", function() {
  if (btnmod == 1) {
    var clipboard = navigator.clipboard.readText();
    url.value = clipboard;
    btnmod = 0;
  } else {
     url.value = '';
  }
});