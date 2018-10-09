function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var message = document.createElement('p');
    message.textContent = msgText;
    panel.appendChild(message);

    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    panel.appendChild(closeButton);

    closeButton.onclick = function () {
        panel.parentNode.removeChild(panel);
    }
};

var btn = document.querySelector('button');
btn.onclick = function () {
    displayMessage('Whoo this is a different message');
};