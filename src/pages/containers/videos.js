import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component{
  // state = {
  //   modalVisible: false
  // };

  handleOpenModal = (id) => {
    this.props.actions.openModal(id);
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal();
  }

  componentDidMount(){
    const search = this.props.location.search;

    if(search){
      const id = search.split('=')[1];
      console.log(search);
      console.log(id);
      this.handleOpenModal(id);
    }
  }

  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related/>
          <Categories 
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
            />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoPlay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
            }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props){
  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    // return state.get('data').get('entities').get('category').get(categoryId)
    return state.getIn(['data', 'entities', 'category', categoryId]);
  });

  let searchResults = list();
  const search = state.getIn(['data', 'search']);

  if(search){
    const mediaList = state.getIn(['data', 'entities', 'media']);
    // console.log(mediaList);
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }

  // console.log(searchResults);

  return {
    categories: categories,
    // search: state.get('data').get('search')
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

function mapDispatchToProps(dispatch){
  return {
    // actions: bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);