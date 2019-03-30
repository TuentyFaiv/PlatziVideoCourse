import React from 'react';
import PropTypes from 'prop-types';

import Playlist from '../../playlist/components/playlist.js';
import './category.css';

function Category(props){
  return(
    <div className="Category">
      <p className="Category-description"> {props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist
        handleOpenModal={props.handleOpenModal} 
        playlist={props.playlist}
        key={props.id}
      />
    </div>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

export default Category;