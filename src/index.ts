import { User } from './user';

function component() {
    var element = document.createElement('div');
    let user = new User('owen');
    user.clock(element);
    return element;
}

document.body.appendChild(component());