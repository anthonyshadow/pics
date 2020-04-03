import React from "react";


import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";





class App extends React.Component {

  state = {images: []}

  //helper function to search the api
  
  onSearchSubmit = term => {
    unsplash.get('/search/photos?page=1&per_page=30', {
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
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
