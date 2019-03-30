import React from 'react';
import './search.css';
import { Prompt } from 'react-router';

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <Prompt
      when={props.prompt}
      message="¿Seguro que quieres dejar la busqueda?"
    />
    <input 
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>    
)

export default Search;