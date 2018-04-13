import React from 'react';


class Results extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      favoriteRestaurant: [],
      favoriteMovie: [],
      favoriteActivity: []
    }

  }

  getAllFavorites() {
    axios.get('/saved')
      .then((response) => {
        this.setState({
          this.favoriteRestaurant = response.data
        })
      })
  }

}

export default Saved;
