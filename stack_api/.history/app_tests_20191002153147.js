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
        await setStack(itemInsert, true, res);        
    })();
};

async function remove(req, res) {
    (async () => {                
        await setStack(null, false, res); 
    })();
};

async function setStack(item, insert, res) {
    fs.readFile('./stack.json', 'utf8', function readFileCallback(err, data) {        
        (async () => {
            var stack = JSON.parse(data);
            var json = JSON.stringify(stack);
            
            console.log(stack.length);

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
            
            fs.writeFile("./stack.json", JSON.stringify(stack, null, 4), (err) => {
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

