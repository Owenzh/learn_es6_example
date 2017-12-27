export class User {
    protected u_name: string;
    constructor(name: string) {
        this.u_name = name;
    }
    toString() {
        let [a, b] = [1, 4, 5];
        return `User name is ${this.u_name} count is ${a + b}`;
    }
}