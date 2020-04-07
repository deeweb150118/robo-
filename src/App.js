import React,{Component}from 'react';
 import Searchbox from './Searchbox';
import Cardsarray from './Cardsarray';
import Scroll from'./Scroll';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state={
	      robots:[],
	      searchfield: ''
    }
} 

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>{
		return response.json()
	})
	.then(users =>{
		this.setState({ robots:users })
	});
}

   onSearchChange=(event)=>{
   	this.setState({ searchfield:event.target.value })
   	}

	   

	render(){
		 const filteredrobo=this.state.robots.filter(robots=>{

	       	return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	       })
   
		return(
          <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
       < Cardsarray  robots={filteredrobo}/>
           </Scroll>
          </div>


		);
	}
}
export default App;