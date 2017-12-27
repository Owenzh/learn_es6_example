import { User } from './user';

function component() {
    var element = document.createElement('div');
    let user = new User('owen');
    element.innerHTML = "Hi ES6. " + user.toString();
    return element;
}

document.body.appendChild(component());