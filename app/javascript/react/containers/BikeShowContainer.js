import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';
import ReviewTile from '../components/ReviewTile';

class BikeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {},
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/bikes/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({bike: body.bike});
      })
<<<<<<< HEAD
      .catch(error => console.error(`error in fetch: ${error.message}`))
=======
    fetch(`/api/v1/reviews/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({reviews: body.reviews})
      })
>>>>>>> show_page
  }


  render() {
<<<<<<< HEAD
    return(
    <div>
      <BikeShow
        id={this.state.bike.id}
        make={this.state.bike.make}
        model={this.state.bike.model}
        year={this.state.bike.year}
        code={this.state.bike.code}
      />
      <h3>jhh</h3>
=======
    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          user_id={review.user_id}
          bike_id={review.bike_id}
          body={review.body}
          rating={review.rating}
          created_at={review.created_at}
        />
      )
    })
    return(
      <div>
        <BikeShow
          id={this.state.bike.id}
          make={this.state.bike.make}
          model={this.state.bike.model}
          year={this.state.bike.year}
          code={this.state.bike.code}
        />
        {reviews}
>>>>>>> show_page
      </div>
    )
  }
}

export default BikeShowContainer;
