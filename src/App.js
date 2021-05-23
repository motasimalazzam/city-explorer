import React from 'react';
import axios from 'axios';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={

      searchQuery:'',
      locationData:'',
      showLocation: false,
      errorMessage:false
    }
  }

  getLocation = async (event) =>{
    
    event.preventDefault();
    let locationUrl=`https://eu1.locationiq.com/v1/search.php?key=pk.9d61ed09f54a2a10035cdf02333644df&q=${this.state.searchQuery}&format=json`;
    try {let result= await axios.get(locationUrl);
    console.log(result.data[0]);

    this.setState({
      locationData: result.data[0],
      showLocation: true,
    })
  }
  catch {
    this.setState({
      showLocation:false,
      errorMessage:true
    })
  }
  }

  updateSearchQuery = (event) =>{

    this.setState({
      searchQuery: event.target.value
    })
  }

  render(){
    return(

      <div>

        <h1>City Explorer</h1>

        {/* <button onClick={this.getLocation}>location</button> */}

        <form onSubmit={this.getLocation}>

          <input type='text' onChange={this.updateSearchQuery} />
          <input type='submit' value='show location'/>
          
        </form>

        <p>{this.state.locationData.display_name}</p>

        {this.state.showLocation && 
        
        <img 
        src={`https://maps.locationiq.com/v3/staticmap?key=pk.9d61ed09f54a2a10035cdf02333644df&center=${this.state.locationData.lat},${this.state.locationData.lon}`}
        alt={this.state.locationData.display_name}
        />
        }
        
      {this.state.errorMessage &&
        <p>Error in getting the data</p>
      }

      </div>
    )
  }
}

export default App;
