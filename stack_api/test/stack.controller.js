
var app = require("../app");
const chai = require('chai');
const chaiHttp = require('chai-http');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
chai.use(chaiHttp);

describe('Stack Controller Methods', function () {
    it('Should work URLs', function () {
        chai.request(app.server).get('/')
            .end((err, res) => {
                chai.expect(res).have.status(200);                
            });

        chai.request(app.server).get('/api/stack')
            .end((err, res) => {                
                chai.expect(res).have.status(200);                            
            });

        //COMENTEI O MÉTODO POP PARA PARAR DE FICAR REMOVENDO DA PILHA, 
        //MAS PODE DESCOMENTAR PARA TESTAR    
        
        // chai.request(app.server).post('/api/pop')
        //     .end((err, res) => {
        //         chai.expect(res).have.status(200);
        //     });

        chai.request(app.server).get('/api/peek')
            .end((err, res) => {
                chai.expect(res).have.status(200);
                chai.expect(res).not.to.be.array();                
            });

        chai.request(app.server).get('/api/smaller')
            .end((err, res) => {
                chai.expect(res).have.status(200);
                chai.expect(res).not.to.be.array();
            });

        chai.request(app.server).get('/api/bigger')
            .end((err, res) => {
                chai.expect(res).have.status(200);
                chai.expect(res).not.to.be.array();
            });
    });
});