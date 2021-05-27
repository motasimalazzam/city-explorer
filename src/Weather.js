import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
        
    render() {
        return (
            <div>

                {this.props.showWeather &&

                    <ListGroup>

                        <ListGroup.Item action variant="success">
                            {this.props.weatherDataFromApp[0].date} <br></br>
                            {this.props.weatherDataFromApp[0].discription}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger">
                            {this.props.weatherDataFromApp[1].date} <br></br>
                            {this.props.weatherDataFromApp[1].discription}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="warning">
                            {this.props.weatherDataFromApp[2].date} <br></br>
                            {this.props.weatherDataFromApp[2].discription}
                        </ListGroup.Item>

                    </ListGroup>
                }
            </div>
        )
    }

}

export default Weather;