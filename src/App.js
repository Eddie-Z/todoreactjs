import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title: 'take out the trash',
        complete:false
      },
      {
        id:2,
        title: 'eat breakfast',
        complete:false
      },
      {
        id:3,
        title: 'eat dinner',
        complete:false
      }
    ]
  }
  
  render() {
      console.log(this.state.todos)
      return(
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
