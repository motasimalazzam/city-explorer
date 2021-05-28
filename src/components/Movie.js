import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {

    render() {
        return (
            <div>

                {this.props.showMovie &&

                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Img variant="top" src={this.props.movieFromApp[0].image_url} alt={this.props.movieFromApp[0].title}
                            title={this.props.movieFromApp[0].title} style={{ height: '18rem' }} />
                       
                        <Card.Body>
                            
                            <Card.Title>{this.props.movieFromApp[0].title}</Card.Title>
                            
                            <Card.Text>
                                {this.props.movieFromApp[0].overview}
                            </Card.Text>
                            
                            <Card.Text>Average Votes: {this.props.movieFromApp[0].average_votes}
                            </Card.Text>
                            
                            <Card.Text>Total Votes: {this.props.movieFromApp[0].total_votes}
                            </Card.Text>
                            
                            <Card.Text>Popularity: {this.props.movieFromApp[0].popularity}
                            </Card.Text>
                            
                            <Card.Text>Release Date: {this.props.movieFromApp[0].released_on}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                }
            </div>
        )
    }
}

export default Movie;