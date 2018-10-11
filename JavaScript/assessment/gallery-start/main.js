var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

function displayedImage(e) {
  displayedImage.setAttribute('src', e.target.getAttribute('src'));
}

for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  function getTheImage(event) {
    console.log(event);
    var src = event.target.getAttribute('src');
    displayedImage.setAttribute('src', src);
  }
  newImage.addEventListener('click', getTheImage);
};

/* Wiring up the Darken/Lighten button */

btn.onclick = changeOverlay;
function changeOverlay() {
  var buttonState = btn.getAttribute('class');

  if (buttonState === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
}

