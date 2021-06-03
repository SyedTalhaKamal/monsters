import React from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/serchbox/searchbox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    // .catch(err => console.log(err))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={ (e) => this.setState({ searchField: e.target.value }) } 
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
