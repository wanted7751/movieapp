import React, { Component } from 'react';  
import Movie from './Movie';

class App extends Component {
  state = {   
  }

  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=like_count")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, key) => {
        return <Movie title={movie.title} poster={movie.poster} key={key} />
      })
      return movies;
  }


  render() {
  
    return (
      <div>
        {this.state.movies ? this._renderMovies() : "Loding"}
      </div>
    );
  }
}

export default App;
