"use strict";

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

//Pushes an new item containing 'data' onto the top of the stack - LIFO
async function push(itemInsert) {
    var item = parseFloat(itemInsert);
    
    if (!isNaN(item))
    {        
        return await pushOrPopFloatStack(item, true);
    }
    else
        throw "Não é um float.";
};

//Removes the data of the item on the top of the stack - LIFO
async function pop() {
    return await pushOrPopFloatStack(null, false);
};

//Returns the data of the item on the top of the stack, but does not remove it
async function peek() {
    return await geItem("peek");
}

//Returns the smaller data of the item of the stack, but does not remove it
async function smaller() {
    return await geItem("smaller");
};

//Returns the bigger data of the item of the stack, but does not remove it
async function bigger() {
    return await geItem("bigger");
};

//get the entire stack
async function getStack() {
    var ret = await fs.readFileAsync('./stack.json');
    return ret;
};

//internal helper functions
async function pushOrPopFloatStack(item, insert) {
    //is float?
    var data = await fs.readFileAsync('./stack.json');
    (async () => {
        var stack = JSON.parse(data);
        if (insert) {
            //abrindo espaço na primeira posição e reposicionando os itens existentes
            for (let index = stack.length; index >= 0; index--) {
                stack[index] = index == 0 ? item : stack[index - 1];
            };
        }
        else {
            //removendo item do topo
            if (stack.length > 0) {
                stack.splice(0, 1);
            };
        };

        fs.writeFile("./stack.json", JSON.stringify(stack, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            };
        });
        return stack;
    })();
};

async function geItem(operation) {
    var stackRes = await fs.readFileAsync('./stack.json');
    var stack = JSON.parse(stackRes);
    if (operation == "peek") {
        return stack[0];
    }
    else {
        var maior = Number.NEGATIVE_INFINITY,
            menor = Infinity;

        stack.forEach(function (item) {
            if (Number(item) > maior) maior = item;
            if (Number(item) < menor) menor = item;
        });

        if (operation == "smaller") {
            return menor;
        };

        if (operation == "bigger") {
            return maior;
        };
    };
};
//internal helper functions

module.exports.push = push;
module.exports.pop = pop;
module.exports.peek = peek;
module.exports.smaller = smaller;
module.exports.bigger = bigger;
module.exports.getStack = getStack;