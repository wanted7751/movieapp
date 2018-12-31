import React, { Component } from 'react';  
import Movie from './Movie';






const movies = [
  {
    title: "hunger",
    poster:"https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
  },
  {
    title: "oldboy",
    poster: "https://i.ytimg.com/vi/VwIIDzrVVdc/maxresdefault.jpg"
  },
  {
    title: "meet",
    poster: "https://t1.daumcdn.net/movie/8cf59a557bc7055aca6f6879f07e91dd76192d3e"
  },
  {
    title: "mother",
    poster: "http://img.newspim.com/news/2016/09/24/1609241336529940.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div>
       {movies.map((movie, key)=>{
         return <Movie title={movie.title} poster={movie.poster} key={key}
         />
       })}
      </div>

      

    );
    
  }
}

export default App;