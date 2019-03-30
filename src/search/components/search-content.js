import React from 'react';
import MediaContainer from '../../playlist/containers/media';

import '../../playlist/components/playlist.css';
// import media from '../../playlist/containers/media';

function SearchContent(props){
  return(
    <div className="Search-content">
      {
        props.search.map((mediaId) => {
          return (
            <MediaContainer
              id={mediaId.get('id')}
              key={mediaId.get('id')}
              openModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default SearchContent;