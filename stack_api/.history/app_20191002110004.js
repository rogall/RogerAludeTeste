var tools = require('./tools');
console.log(tools.foo());
console.log(tools.bar());

function Stack() {
    this.stack = [];
    this.insert = param => this.stack[this.stack.length] = param;
    this.remove = () => {
        if (this.stack.length > 0) {
            let obj = this.stack[this.stack.length - 1];
            this.stack.splice(this.stack.length - 1, 1);
            return obj;
        } else {
            return "Empty Stack!";
        };
    };
};

s = new Stack();

s.insert(712312312);
s.insert(123123123);
s.insert(123123123);
console.log(s.stack);
s.insert(4);
s.insert(5);
s.insert(8);

console.log(s.stack);
console.log(s.removeStack());

console.log(s.stack);
console.log(s.removeStack());

console.log(s.stack);
console.log(s.removeStack());

console.log(s.stack);
console.log(s.removeStack());

console.log(s.stack);
console.log(s.removeStack());
