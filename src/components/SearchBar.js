import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onformSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <h4>MyTube</h4>
        <form className="ui form fluid icon input" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Video Search..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i className="circular search link icon" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
