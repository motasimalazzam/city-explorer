import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {

    render() {
        return (
        
            
            <div key={this.props.idx} style={{display:'inline-block'}}>
                

                {this.props.showMovie &&

                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Img variant="top" src={this.props.movie.image_url} alt={this.props.movie.title}
                            title={this.props.movie.title} style={{ height: '18rem' }} />
                       
                        <Card.Body>
                            
                            <Card.Title>{this.props.movie.title}</Card.Title>
                            
                            <Card.Text>
                                {this.props.movie.overview}
                            </Card.Text>
                            
                            <Card.Text>Average Votes: {this.props.movie.average_votes}
                            </Card.Text>
                            
                            <Card.Text>Total Votes: {this.props.movie.total_votes}
                            </Card.Text>
                            
                            <Card.Text>Popularity: {this.props.movie.popularity}
                            </Card.Text>
                            
                            <Card.Text>Release Date: {this.props.movie.released_on}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                }
            </div>
            
        )
    }
}

export default Movie;