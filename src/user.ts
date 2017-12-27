export class User {
    protected u_name: string;
    constructor(name: string) {
        this.u_name = name;
    }
    toString() {
        let [a, b] = [1, 4, 5];
        return `User name is ${this.u_name} count is ${a + b}`;
    }
    clock(ele: Element) {
        setInterval(() => {
            let dat = new Date();
            let y = dat.getFullYear();
            let m = dat.getMonth() + 1;
            let d = dat.getDate();
            let h = dat.getHours();
            let MM = dat.getMinutes();
            let s = dat.getSeconds();
            ele.innerHTML = `当前时间 ${y}-${m}-${d} ${h}:${MM}:${s}`;
        }, 1000)
    }
}