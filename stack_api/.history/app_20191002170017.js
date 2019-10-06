const express = require('express');
const app = express();
const fs = require('fs');

app.set('port', process.env.PORT || 3000);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(__dirname + '/public'));

exports.server = app.listen(app.get('port'), () => {
    console.log('App is running on http://localhost:%d in %s mode', app.get('port'), app.get('env'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/api/primitive/insert', insertPrimitive);
app.post('/api/primitive/remove', removePrimitive);

app.post('/api/structured/insert', insertStructured);
app.post('/api/structured/remove', removeStructured);

/*///////////////////////////////// primitive ////////////////////////////////////*/
async function insertPrimitive(req, res) {
    (async () => {
        const itemInsert = req.body.itemInsert;         
        console.log(itemInsert);                 
        await setStackPrimitive(itemInsert, true, res);        
    })();
};

async function removePrimitive(req, res) {
    (async () => {                
        await setStackPrimitive(null, false, res); 
    })();
};

async function setStackPrimitive(item, insert, res) {
    fs.readFile('./stackPrimitive.json', 'utf8', function readFileCallback(err, data) {        
        (async () => {
            var stack = JSON.parse(data);
            var json = JSON.stringify(stack);
                        
            if(insert){
                stack[stack.length] = item;  
                console.log("Item inserted: " + item);
            }
            else{
                if (stack.length > 0) {
                    let obj = stack[stack.length - 1];
                    stack.splice(stack.length - 1, 1);            
                };
            };
            
            fs.writeFile("./stackPrimitive.json", JSON.stringify(stack, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been updated");
            });

            res.send(stack);
        })();        
    });
};
/*///////////////////////////////// primitive ////////////////////////////////////*/

/*//////////////////////////// structured | stack-lifo ///////////////////////////*/
async function insertStructured(req, res) {
    (async () => {
        const itemInsert = req.body.itemInsert;         
        console.log(itemInsert);                 
        await setStackStructured(itemInsert, true, res);        
    })();
};

async function removeStructured(req, res) {
    (async () => {                
        await setStackStructured(null, false, res); 
    })();
};

async function setStackStructured(item, insert, res) {
    fs.readFile('./stackStructured.json', 'utf8', function readFileCallback(err, data) {        
        (async () => {
            var stack = JSON.parse(data);
            var json = JSON.stringify(stack);
                        
            if(insert){
                stack[stack.length] = item;  
                console.log("Item inserted: " + item);
            }
            else{
                if (stack.length > 0) {
                    let obj = stack[stack.length - 1];
                    stack.splice(stack.length - 1, 1);            
                };
            };
            
            fs.writeFile("./stackPrimitive.json", JSON.stringify(stack, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been updated");
            });

            res.send(stack);
        })();        
    });
};
/*//////////////////////////// structured | stack-lifo ///////////////////////////*/