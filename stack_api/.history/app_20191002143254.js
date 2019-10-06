


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
console.log("3 elements in stack " + s.stack);
s.insert(42312312);
s.insert(5123123123);
s.insert(1231231238);
console.log("6 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log("5 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log("4 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log("3 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log("2 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log("1 elements in stack " + s.stack);

console.log(s.remove() + " removed");
console.log(s.remove());
