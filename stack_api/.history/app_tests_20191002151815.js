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

app.post('/api/insert', insert);
app.post('/api/remove', remove);

async function insert(req, res) {
    (async () => {
        const itemInsert = req.body.itemInsert;         
        console.log(itemInsert);                 
        await setStack(itemInsert, true);        
        updateStack(stack);
        res.send(stack);
    })();
};

async function remove(req, res) {
    (async () => {                
        await setStack(null, true); 
    })();
};

async function setStack(item, insert) {
    fs.readFile('./stack.json', 'utf8', function readFileCallback(err, data) {        
        (async () => {
            obj = JSON.parse(data);
            json = JSON.stringify(obj);
            console.log(json);
            console.log("Stack has been read");

            if(insert){
                if (this.stack.length > 0) {
                    stack[stack.length] = itemInsert;  
                }; 
            }
            else{
                if (stack.length > 0) {
                    let obj = this.stack[stack.length - 1];
                    stack.splice(stack.length - 1, 1);            
                };
            };
            
            fs.writeFile("./stack.json", JSON.stringify(stack, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been updated");
            });

            res.send(json);
        })();        
    });
};

