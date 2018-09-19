function createParagraph () {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'You clicked the button';
    document.body.appendChild(paragraph);
}

let buttons = document.querySelectorAll('button');

for (let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}