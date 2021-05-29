import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
        
    render() {
        return (
            <div key={this.props.idx} style={{display:'inline-block'}} >

                {this.props.showWeather &&

                    <ListGroup>

                        <ListGroup.Item action variant="success">
                            {this.props.weather.date} <br></br>
                            {this.props.weather.discription}
                        </ListGroup.Item>
                
                    </ListGroup>
                }
            </div>
        )
    }

}

export default Weather;