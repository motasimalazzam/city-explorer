import React from 'react';
import axios from 'axios';
import Weather from './components/Weather.js';
import Movie from './components/Movie.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      searchQuery: '',
      locationData: '',
      longtude: '',
      latitude: '',
      cityWeather: [],
      movieArr: [],
      showMovie: false,
      showLocation: false,
      showWeather: false,
      errorMessage: false,
      errorCode:'',
    }
  }

  getLocation = async (event) => {

    event.preventDefault();

    let serverRoute = process.env.REACT_APP_SERVER; // serverRout

    let locationUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.9d61ed09f54a2a10035cdf02333644df&q=${this.state.searchQuery}&format=json`;

    try {

      let result = await axios.get(locationUrl);
      console.log(result.data[0]);

      this.setState({
        locationData: result.data[0],
        showLocation: true,
        errorMessage: false,
        longtude: result.data[0].lon,
        latitude: result.data[0].lat,
      })
    }catch (error){

      this.setState({
        showLocation: false,
        errorMessage: true,
        errorCode: error,
      })
    }

    try {
      // http://localhost:3001/getWeather?city=amman&lat=31.95&lon=35.91
      const weatherUrl = `${serverRoute}/getWeather?city=${this.state.searchQuery}`;
      console.log('url',weatherUrl)

      let weatherData = await axios.get(weatherUrl);
      console.log('weatherData',weatherData.data);

      this.setState({
        cityWeather: weatherData.data,
        showWeather: true,
      })

    }catch (error){

      this.setState({
        cityWeather: error.respose,
        showWeather: false,
      })
    }

    const movieUrl=`${serverRoute}/getMovie?movie=${this.state.searchQuery}`
    console.log('movieUrl',movieUrl);

    axios
     .get(movieUrl)
       .then(movieResult=>{
         this.setState({
           movieArr: movieResult.data,
           showMovie: true,
         })
         console.log('MovieData',movieResult.data);
       })
       
      .catch(error=>{
        this.setState({
          showMovie:false,
          movieArr: `No Movie for this City ${error}`,
        })
      })

    
  }

  updateSearchQuery = (event) => {

    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    return (

      <div>

        <h1>City Explorer</h1>

        <Form onSubmit={this.getLocation}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="City Name" onChange={this.updateSearchQuery} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        {this.state.showLocation &&

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.9d61ed09f54a2a10035cdf02333644df&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt={this.state.locationData.display_name} />

            <Card.Body>
              <Card.Title>{this.state.locationData.display_name}</Card.Title>
              <Card.Text>
                {this.state.locationData.lat} <br></br>
                {this.state.locationData.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        }

        {this.state.errorMessage &&

          <Alert variant="danger">
            Please Write Another City Name, Error Code:
        {this.state.errorCode.response.status}
          </Alert>
        }

        {this.state.showLocation &&
          <Weather weatherDataFromApp={this.state.cityWeather} showWeather={this.state.showWeather}></Weather>
        }

        {this.state.showLocation &&
        
        <Movie movieFromApp={this.state.movieArr} showMovie={this.state.showMovie}/>
        }

      </div>
    )
  }
}

export default App;