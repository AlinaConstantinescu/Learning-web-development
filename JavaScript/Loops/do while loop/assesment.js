let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i > 0) {
    let paragraph = document.createElement('p');
    if (i === 10) {
        paragraph.textContent = 'Contdown from ' + i;
    } else if (i === 0) {
        paragraph.textContent = 'Blast off!'
    } else {
        paragraph.textContent = i;
    }

    output.appendChild(paragraph);
    i--;
}