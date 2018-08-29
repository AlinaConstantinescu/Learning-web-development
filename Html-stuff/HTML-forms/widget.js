// This function will be used each time we want to deactivate a custom widget
// It takes one parameter
// select: the DOM node with the 'select' class to activate
function deactivateSelect(select) {
    // if the widget is not active there is nothing to do
    if (!select.classList.contains('active')) return;

    // we need to get the list of options for the custom widget
    var optList = select.querySelector('.optList');

    // we close the lsit of options
    optList.classList.add('hidden');

    // and we deactivate the custom widget itself
    select.classList.remove('active');
}


// This function will be used each time we want to (de)activate a custom widget
// It takes two parameters:
// select : the DOM node with the `select` class to activate
// selectList : the list of all the DOM nodes with the `select` class
function activeSelect(select, selectList) {
    // If the widget is already active there is nothing to do
    if (select.classList.contains('active')) return;

    // We have to turn off the active state on all custom widgets
    // Because the deactivateSelect function fulfill all the requirement of the
    // forEach callback function, we use it directly without using an intermediate
    // anonymous function.
    selectList.forEach(deactivateSelect);


    // And we turn on the active state for this specific widget
    select.classList.add('active');
}


// This function will be used each time the user wants to open/closed the list of options
// It takes one parameter:
// select : the DOM node with the list to toggle
function toggleOptList(select) {

    // The list is kept from the widget
    var optList = select.querySelector('.optList');

    // We change the class of the list to show/hide it
    optList.classList.toggle('hidden');
}

// This function will be used each time we need to highlight an option
// It takes two parameters:
// select : the DOM node with the `select` class containing the option to highlight
// option : the DOM node with the `option` class to highlight
function highlightOption(select, option) {

    // We get the list of all option available for our custom select element
    var optionList = select.querySelectorAll('.option');

    // We remove the highlight from all options
    optionList.forEach(function (other) {
        other.classList.remove('highlight');
    });

    // We highlight the right option
    option.classList.add('highlight');
}

// We handle the event binding when the document is loaded.
window.addEventListener('load', function () {
    var selectList = document.querySelectorAll('.select');
  
    // Each custom widget needs to be initialized
    selectList.forEach(function (select) {
  
      // as well as all its `option` elements
      var optionList = select.querySelectorAll('.option');
  
      // Each time a user hovers their mouse over an option, we highlight the given option
      optionList.forEach(function (option) {
        option.addEventListener('mouseover', function () {
          // Note: the `select` and `option` variable are closures
          // available in the scope of our function call.
          highlightOption(select, option);
        });
      });
  
      // Each times the user click on a custom select element
      select.addEventListener('click', function (event) {
        // Note: the `select` variable is a closure
        // available in the scope of our function call.
  
        // We toggle the visibility of the list of options
        toggleOptList(select);
      });
  
      // In case the widget gain focus
      // The widget gains the focus each time the user clicks on it or each time
      // they use the tabulation key to access the widget
      select.addEventListener('focus', function (event) {
        // Note: the `select` and `selectList` variable are closures
        // available in the scope of our function call.
  
        // We activate the widget
        activeSelect(select, selectList);
      });
  
      // In case the widget loose focus
      select.addEventListener('blur', function (event) {
        // Note: the `select` variable is a closure
        // available in the scope of our function call.
  
        // We deactivate the widget
        deactivateSelect(select);
      });
    });
  });