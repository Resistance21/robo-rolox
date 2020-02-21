import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monsters: user}));
  }

  handleSearch = (event) => {
    this.setState({searchInput: event.target.value})
  }


  render(){
    const {monsters, searchInput} = this.state;

    const filteredRobot = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()));


    return (
      <div className="App">
      <h1>Robo Relox</h1>
        <input type="search" placeholder='Search monsters' onChange={this.handleSearch}></input>
        <CardList monsters={filteredRobot} />
      </div>
    );
  }
}

export default App;