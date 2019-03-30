import React, { Component } from 'react';
import Playlist from './components/playlist.js';

class Categories extends Component {
  render(){
    const category = this.props.data.categories;
    // console.log(category);
    return(
      <div>
        {
          category.map((item) => {
            return(
              <Playlist {...item} key={item.id}/>
            )
          })
        }
      </div>
    )
  }
}

export default Categories;