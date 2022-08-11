document.querySelector('title').textContent =' MoonMedia Downloader - Looks! Its floating!';
/* Clipboard/Clear */
var btnmod, clipboard;
var url = document.getElementById('url');
url.addEventListener("input", function() {
  if (url.value == 0) {
    btnmod = 1;
  } else {
    btnmod = 0;
  };
  //console.log('btnmod =', btnmod, '| value = \"'.concat(url.value, '\"'));
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

/* hover effect */
var main = document.getElementById('main');
var batch = document.getElementById('batch');
var settings = document.getElementById('settings');
var hmain = document.getElementById('hmain');
var hbatch = document.getElementById('hbatch');
var hsettings = document.getElementById('hsettings');
main.addEventListener('mouseover', function() {hmain.style.transform = 'scaleX(1)'});
main.addEventListener('mouseout', function() {hmain.style.transform = null});
batch.addEventListener('mouseover', function() {hbatch.style.transform = 'scaleX(1)'});
batch.addEventListener('mouseout', function() {hbatch.style.transform = null});
settings.addEventListener('mouseover', function() {hsettings.style.transform = 'scaleX(1)'});
settings.addEventListener('mouseout', function() {hsettings.style.transform = null});

/* calculate before click effect */
function tabind(element) { //Visual bug is probably exist
  slider.style.display = 'block';
  switch (element) {
    case 'main':
      slider.style.width = main.getBoundingClientRect()['width'].toString() +'px';
      slider.style.left = main.getBoundingClientRect()['left'].toString() +'px';
      break;
    case 'batch':
      slider.style.width = batch.getBoundingClientRect()['width'].toString() +'px';
      slider.style.left = batch.getBoundingClientRect()['left'].toString() +'px';
      break;
    case 'settings':
      slider.style.width = settings.getBoundingClientRect()['width'].toString() +'px';
      slider.style.left = settings.getBoundingClientRect()['left'].toString() +'px';
      break;
  };
};

/* click effect */
var slider = document.querySelector('slider');
