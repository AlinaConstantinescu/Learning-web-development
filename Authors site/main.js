function displayValue(value, addMargin, addPadding) {
    var div = document.createElement('div');
    div.style.fontSize = '18px';

    if (addMargin)
        div.style.marginBottom = '10px';
    if (addPadding)
        div.style.paddingLeft = '20px';
    div.innerText = value;

}