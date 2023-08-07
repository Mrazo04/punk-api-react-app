import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      arrayOfBeer: [],
    };

  }
  
  componentDidMount(){
      axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        const arrayOfBeer= res.data
        this.setState({arrayOfBeer})
      });
  }
    
 render(){
  return (
    <div className="App">
      <header className="App-header">
       <ol>
       {this.state.arrayOfBeer.map((beer, index) => {
        return (
          <BeerCard key={index} 
          name={beer.name} 
          image_url ={beer.image_url} 
          first_brewed={beer.first_brewed}
          tagline={beer.tagline}
          abv={beer.abv}
          description={beer.description}
          like={beer.like}
          />
        )
       })}
       </ol>
       
      </header>
    </div>
  );
}};

export default App

// class LikeButton extends React.Component{

//   state = {
//     likes: 0
//   };

//   addLike = () => {
//     let newCount = this.state.likes +1;
//       this.setState({
//         likes: newCount
//       });
//   }

//   render(){
//     return (
//       <div>
//         <button onClick={this.addLike}>LIKE: {this.state.likes} </button>
//       </div>
//     )
    
//   }

// }