import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';
import { Link } from 'react-router-dom';

class Media extends PureComponent {
  handleClick = event => {
    this.props.openModal(this.props.id);
  }

  render(){
    return(
      <Link
        to={{
          pathname: '/videos',
          search: `?id=${this.props.id}`,
          state: {
            modal: true,
            id: this.props.id
          }
        }} 
      >
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img
              src={this.props.cover}
              alt=""
              width={260}
              height={160}
              className="Media-image"
            />
          </div>
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </Link>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Media;