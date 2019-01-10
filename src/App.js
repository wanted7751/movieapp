import React, { Component } from 'react';  
import Movie from './Movie';
import "./App.css";
//success
class App extends Component {  
  state = {   
  }
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie)  => {
        // 여기서 map으로  state.movies 에있는걸 movie 에 넣은것은 이미 갹 movies의 정보를 movie에 넣은 상태
        // 아래에서 이제 movie.title 해서 title의 정보를 가져오고 있다. 
        //console.log(movies)
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
    //console.log(_movies);
    this.setState({ movies: _movies });
      //만약 _movies가아니고movies 면 setstate에 movies와 같으므로
      //그냥 movies 라고 적어도됨 es6 문법

  }

  _callApi = ()=>{
    return(
      fetch("https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=download_count")
        .then(response => response.json())
        .then(json => json.data.movies)
        //.then(json => console.log(json))
        .catch(err => console.log(err))

    )
    
  }


  render() {
  const{movies} = this.state; // ==> 이거는 이거와 같다. this.state.movies
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loding"}
      </div>
    );
  }
}

export default App;
