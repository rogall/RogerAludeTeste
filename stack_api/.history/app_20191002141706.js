const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(__dirname + '/public'));

// export our app
exports.server = app.listen(app.get('port'), () => {
    console.log('App is running on http://localhost:%d in %s mode', app.get('port'), app.get('env'));
});

// API Endpoints
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/api/insert', insert);
app.post('/api/remove', remove);

async function getStack(req, res) {
    fs.readFile('./stack.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            (async () => {               
                var stack = [];
                fs.writeFile("./stack.json", JSON.stringify(stack, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    };
                    console.log("Stack has been created");
                });

                return stack;
            })();
        } else {
            (async () => {
                obj = JSON.parse(data);
                json = JSON.stringify(obj);
                console.log(json);
                console.log("Stack has been read");
                return json;
            })();
        }
    });
};

async function insert(req, res) {
    (async () => {
        const itemInsert = req.body.itemInsert;               
        console.log(itemInsert);                 
        var stack = await getStack();
        itemInsert => stack[stack.length] = itemInsert;        
        updateStack(stack);

        return stack;
    })();
};

async function remove(req, res) {
    (async () => {
        const itemRemove = req.body.itemRemove;               
        console.log(itemRemove);                 
        var stack = await getStack();

        if (stack.length > 0) {
            let obj = this.stack[stack.length - 1];
            stack.splice(stack.length - 1, 1);            
        };

        updateStack(stack);

        return stack;
    })();
};

function updateStack(stack){
    fs.writeFile("./stack.json", JSON.stringify(stack, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been updated");
    });
};

