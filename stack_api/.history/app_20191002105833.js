var tools = require('./tools');
console.log(tools.foo());
console.log(tools.bar());

function Stack() {
    this.stack = {};
    this.insertStack = param => this.stack[this.stack.length] = param;
    this.removeStack = () => {
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

s.insertStack(712312312);
s.insertStack(123123123);
s.insertStack(123123123);

console.log(s.stack);

s.insertStack(4);
s.insertStack(5);

s.insertStack(8);

s.removeStack();
s.removeStack();

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
