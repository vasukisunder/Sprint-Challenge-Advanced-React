import React from 'react';
import axios from 'axios';
import './App.css';
import Display from './Display';


class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };

  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
        .then(response =>{
            console.log(response);
            this.setState({players: response.data});
        })
        
}

render(){
    const {players} = this.state;
  console.log(players);
    return(
        players.map(player =>{
            const {id} = player;
            return (
                <div className = "cont"><Display key= {id} user={player}/></div>
            )
        })
    )
}
}
export default Players;
