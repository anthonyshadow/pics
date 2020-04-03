import React from "react";


import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash"





class App extends React.Component {

  state = {images: []}

  //helper function to search the api
  
  onSearchSubmit = term => {
    unsplash.get('/search/photos', {
      params: { query: term}     
   }).then((response) => {
     this.setState({ images: response.data.results})
   })
  };
  
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;
