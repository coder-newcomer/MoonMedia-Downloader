/* Clipboard/Clear */
var btnmod, clipboard;
var url = document.getElementById('url');
var path = document.getElementById('path')
  x = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
  y = 'M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z';
url.addEventListener("input", function() {
  if (url.value == 0) {
    path.setAttribute('d', y)
    btnmod = 1;
  } else {
    path.setAttribute('d', x)
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
    btnmod = 1;
    path.setAttribute('d', y)
  }
});

/* focus */
var mode;

/* hover effect */
var slider = document.querySelector('slider');
var main = document.getElementById('main');
var batch = document.getElementById('batch');
var settings = document.getElementById('settings');
var hmain = document.getElementById('hmain');
var hbatch = document.getElementById('hbatch');
var hsettings = document.getElementById('hsettings');
hmain.style.width = main.getBoundingClientRect()['width'] + 'px';
hbatch.style.width = batch.getBoundingClientRect()['width'] + 'px';
hsettings.style.width = settings.getBoundingClientRect()['width'] + 'px';
main.addEventListener('mouseover', function() {hmain.style.transform = 'scaleX(1)'});
main.addEventListener('mouseout', function() {hmain.style.transform = null;});
batch.addEventListener('mouseover', function() {hbatch.style.transform = 'scaleX(1)'});
batch.addEventListener('mouseout', function() {hbatch.style.transform = null});
settings.addEventListener('mouseover', function() {hsettings.style.transform = 'scaleX(1)'});
settings.addEventListener('mouseout', function() {hsettings.style.transform = null});
main.addEventListener('mouseup', function() {focus('main');});
batch.addEventListener('mouseup', function() {focus('batch');});
settings.addEventListener('mouseup', function() {focus('settings');});

function focus(element) {
  slider.style.display = 'block';
  switch (element) {
    case 'main':
      slider.style.width = main.getBoundingClientRect()['width'] + 'px'
      slider.style.left = main.getBoundingClientRect()['left'] + 'px'
      break;
    case 'batch':
      slider.style.width = batch.getBoundingClientRect()['width'] + 'px'
      slider.style.left = batch.getBoundingClientRect()['left'] + 'px'
      break;
    case 'settings':
      slider.style.width = settings.getBoundingClientRect()['width'] + 'px'
      slider.style.left = settings.getBoundingClientRect()['left'] + 'px'
      break;
  };
  mode = element;
};
focus('main');