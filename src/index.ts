function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = "Hi ES6.";
    return element;
}

document.body.appendChild(component());