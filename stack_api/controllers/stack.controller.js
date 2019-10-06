"use strict";

var stackService = require("../services/stack.service");

async function push(req, res) {    
    try{
        res.send(await stackService.push(req.body.itemInsert));
    }
    catch(e){     
        console.log("Erro ao inserir item no topo | " + e);   
        res.status(500).send();
    };
};

async function pop(req, res) {         
    try{
        res.send(await stackService.pop());
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    };
};

async function peek(req, res) { 
    try{
        var ret = await stackService.peek();
        res.send([ret]);
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    };
};

async function smaller(req, res) {      
    try{        
        var ret = await stackService.smaller();
        res.send([ret]);
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    };  
};

async function bigger(req, res) { 
    try{
        var ret = await stackService.bigger();
        res.send([ret]);
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    };   
};

async function getStack(req, res) {        
    try{
        res.send(await stackService.getStack());
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    };  
};

module.exports.push = push;
module.exports.pop = pop;
module.exports.peek = peek;
module.exports.smaller = smaller;
module.exports.bigger = bigger;
module.exports.getStack = getStack;