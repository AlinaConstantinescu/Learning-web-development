const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'jasmin'];
let info = 'My cats names are:'
let para = document.querySelector('p');

for (i =0; i<cats.length; i++) {
    if (i === cats.length - 1) {
        info = info + 'and' + cats[i] + '.';
    } else {
        info = info + ',' + cats[i];
    }
}

para.textContent = info;