import React, { Component } from 'react';
import axios from 'axios';

export default class Push extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeMyFloat = this.onChangeMyFloat.bind(this);
        this.onClickBack = this.onClickBack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            my_float: ''
        }
    }

    onClickBack(e) {
        this.props.history.push(`/`);        
    }  

    onChangeMyFloat(e) {
        this.setState({
            my_float: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const the_post = {
            itemInsert: this.state.my_float
        }

        axios.post('http://localhost:3001/api/push', the_post)
            .then(res => this.props.history.push(`/`)).catch(err => Err(err));           

        this.setState({
            my_float: ''
        })

        function Err(err){
            console.log(err);
            alert("Erro ao inserir item");
        };
    }

    render() {
        return (
            <div style={{ marginTop: 20, width: 300 }}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text"                            
                            className="form-control"
                            value={this.state.my_float} 
                            onChange={this.onChangeMyFloat}                                                     
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Push" className="btn btn-primary"  /> 
                        &ensp;&ensp;          
                        <input type="button" value="Cancel" className="btn btn-primary" onClick={this.onClickBack}  />             
                    </div>                    
                </form>
            </div>
        )
    }
}