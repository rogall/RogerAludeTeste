import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class StackList extends Component {

  constructor(props) {
    super(props);
    this.state = { stack: [] };
    this.operation = "";

    this.pop = this.pop.bind(this);
    this.peek = this.peek.bind(this);
    this.smaller = this.smaller.bind(this);
    this.bigger = this.bigger.bind(this);
  }

  peek(e) {
    axios.get('http://localhost:3001/api/peek ')
      .then(response => this.setState({ operation: "Peek: " + response.data }))
      .catch(function (error) {
        console.log(error);
      })
  }

  smaller(e) {
    axios.get('http://localhost:3001/api/smaller')
      .then(response => this.setState({ operation: "Smaller: " + response.data }))
      .catch(function (error) {
        console.log(error);
      })
  }

  bigger(e) {
    axios.get('http://localhost:3001/api/bigger')
      .then(response => this.setState({ operation: "Bigger: " + response.data }))
      .catch(function (error) {
        console.log(error);
      })
  }

  pop(e) {
    axios.post('http://localhost:3001/api/pop')
      .then(res => this.componentDidMount());
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/stack')
      .then(response => {
        this.setState({ stack: response.data, operation: "" });

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  operationLabel() {
    return this.state.operation;
  }

  stackList() {
    try {
      if (this.state.stack !== undefined) {
        return this.state.stack.map(function (item, i) {          
          return <tr key={i.toString()}><td style={{ textAlign: "center" }}>{item}</td></tr>;
        });
      };
    } catch (error) {
      alert("Erro ao buscar pilha");     
    }
  }

  render() {
    return (
      <div style={{ marginTop: 20, width: 300 }}>
        <strong style={{ marginTop: 20, width: 300 }}>{this.operationLabel()}</strong>
        <Link to="/push" className="nav-link">Push</Link>
        <a href="# " onClick={this.pop} className="nav-link">Pop</a>
        <a href="# " onClick={this.peek} className="nav-link">Peek</a>
        <a href="# " onClick={this.smaller} className="nav-link">Smaller</a>
        <a href="# " onClick={this.bigger} className="nav-link">Bigger</a>
        <table className="table table-striped" style={{ marginTop: 20, width: 300 }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Stack</th>
            </tr>
          </thead>
          <tbody>
            {this.stackList()}
          </tbody>
        </table>
      </div>
    )
  }
}