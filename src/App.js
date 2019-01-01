import React, { Component } from 'react';  
import Movie from './Movie';

class App extends Component {
  state = {   
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie)  => {
        console.log(movies)
        return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        
        />
      })
      return movies;
  }

  _getMovies = async() => {
    const _movies =  await this._callApi()
    this.setState({ movies: _movies });
      //만약 _movies가아니고movies 면 setstate에 movies와 같으므로
      //그냥 movies 라고 적어도됨 es6 문법

  }

  _callApi = ()=>{
    return (
      fetch("https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=like_count")
        .then(response => response.json())
        .then(json => json.data.movies)
        //.then(json => console.log(json))
        .catch(err => console.log(err))
    );
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
