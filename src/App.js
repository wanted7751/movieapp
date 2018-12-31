import React, { Component } from 'react';  
import Movie from './Movie';

class App extends Component {
  state={
    greeting:"hello",
    movies: [
      {
        id: 1,
        title: "hunger",
        poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
      },
      {
        id: 2,
        title: "oldboy",
        poster: "https://i.ytimg.com/vi/VwIIDzrVVdc/maxresdefault.jpg"
      },
      {
        id: 3,
        title: "meet",
        poster: "https://t1.daumcdn.net/movie/8cf59a557bc7055aca6f6879f07e91dd76192d3e"
      },
      {
        id: 4,
        title: "mother",
        poster: "http://img.newspim.com/news/2016/09/24/1609241336529940.jpg"
      }
    ]
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title:"soldier save",
            poster:"http://t1.daumcdn.net/liveboard/movie/018fcad2ec2c44ae94acafa191502bbb.jpg"

          }
        ]
      })
    },2000)
  }
  

  render() {
   console.log(...this.state.movies); 
    return (
      <div>
        
       {this.state.movies.map((movie, key)=>{
         return <Movie title={movie.title} poster={movie.poster} key={key}
         />
       })}
      </div>

      

    );
    
  }
}

export default App;
