import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./components/card-list/card-list.js";
import {Searchbox} from './components/search/searchbox.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this); //.bind is a method on any function where the context of this is set to whatever we pass to it
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json"
    )
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e){this.setState({searchField: e.target.value})}

  render() {
    //using destructuring
    const {monsters, searchField} = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <h5 style={{color: "red"}}>Developed by: Forge Technology Solutions LLC.</h5>
        <Searchbox
        placeholder="Search for a Monster"
        handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredmonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
