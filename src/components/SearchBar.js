import React from 'react';

class SearchBar extends React.Component {

//state

  state = {term: ''};


//helper functions

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term)
  };

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  };



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              placeholder="Start typing to search"
              value={this.state.term}
              onChange={this.onInputChange}
              
            />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar