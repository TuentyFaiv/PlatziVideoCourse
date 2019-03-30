import React from 'react';
import PropTypes from 'prop-types';

import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search';
import SearchContent from '../../search/components/search-content';

function Categories(props){
  // console.log(props.search);
  return(
    <div className="Categories">
      <SearchContainer/>
      {
        props.isLoading &&
        <p>Buscando tus videos favoritos...</p>
      }

      {
        <SearchContent
          search={props.search}
          openModal={props.handleOpenModal}
        />
      }
      
      {
        props.categories.map((item) => {
          return (
            <Category
              {...item.toJS()}
              key={item.get('id')}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired
};

export default Categories;