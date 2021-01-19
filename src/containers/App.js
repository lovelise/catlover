import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import "./App.css";

import Scroll from "../components/Scroll.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      cats: [],
      searchField: " ",
    };
  }
  onSearchValue = (event) => {
    this.setState({ searchField: event.target.value });
    return event.target.value;
  };

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let cats = [];
        let url;
        data.map((cat) => {
          for (let x in cat.image) {
            if (x === "url") url = cat.image[x];
          }
          cats.push({
            id: cat.id,
            name: cat.name,
            description: cat.description,
            imgUrl: url,
          });
          return this.setState({ cats: cats });
        });
      });
  }

  render() {
    const { cats, searchField } = this.state;
    const filterValue = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Cat lovers</h1>
        <SearchBox searchValue={this.onSearchValue} />
        <Scroll>
          <CardList cats={filterValue} />
        </Scroll>
      </div>
    );
  }
}

export default App;
