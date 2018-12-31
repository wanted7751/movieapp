import React, { Component } from 'react';
import './Movie.css';

export default class Movie extends Component {
  

  render() {
      console.log(this.props)
    return (
        <div>
            <MoviePoster poster={this.props.poster} />
            <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{

    render(){
        
        return (
            <div>
                <img src={this.props.poster} alt={"please"} />
            </div>           
        )
        
    }
}