import React, { Component } from "react";
import './App.css';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            name: 'John'
        };
    }


  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.info;
    const {handleDelete} = this.props
    
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <h3>Count: {this.state.count}</h3>
          <h3>Name: {this.state.name}</h3>
          <button type="button" onClick={() => handleDelete(id)}>Delete me</button>
        </div>
      </article>
    );
  }
}