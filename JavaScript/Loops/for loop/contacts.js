const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
let paragraph = document.querySelector('p');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let searchName = input.value;
    input.value = '';
    input.focus();
    for (i=0; i<contacts.length; i++){
        let splitContacts = contacts[i].split(':');
        if (splitContacts[0] === searchName) {
            paragraph.textContent = splitContacts[0] + '\s phone number is: ' + splitContacts[1];
            break;
        } else {
            paragraph.textContent = 'Contact not found';
        }
    }
});