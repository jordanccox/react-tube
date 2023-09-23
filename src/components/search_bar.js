import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { term: '' };
  } 

  onInputChange(input) {
    this.setState({ term: input });
    this.props.onSearchTermChange(input);
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;