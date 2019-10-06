var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

function Stack() {
    this.stack = [];
    this.insertStack = param => this.stack[this.stack.length] = param;
    this.removeStack = () => {
        if (this.stack.length > 0) {
            let obj = this.stack[this.stack.length - 1];
            this.stack.splice(this.stack.length - 1, 1);
            return obj;
        } else {
            return "Sem elementos na pilha";
        }
    }
}

module.exports = Stack();
