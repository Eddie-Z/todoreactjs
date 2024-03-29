import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title: 'take out the trash',
        completed:false
      },
      {
        id:2,
        title: 'eat breakfast',
        completed:true
      },
      {
        id:3,
        title: 'eat dinner',
        completed:false
      }
    ]
  }
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
}
  
  render() {
      return(
      <div className="App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
    );
  }
}

export default App;
