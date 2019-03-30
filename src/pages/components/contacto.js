import React, { Component } from 'react';
import './contacto.css';
import perfil from '../../../images/perfil.jpg'

class Contacto extends Component{
  render(){
    return(
      <section className="meet-me">
        <h2>Acerca de Mi</h2>
        <div className="conoceme">
          <figure className="image">
            <img src={perfil} alt="perfil"/>
          </figure>
          <div className="meet">
            <ol>
              <li>
                Mi nombre es Tonalli Itzcuahtli López López
              </li>
              <li>
                Tengo 18 años
              </li>
              <li>
                Soy Mexicano
              </li>
              <li>
                Soy una persona apasionada por la tecnología y me gusta aprender cosas nuevas cada día
              </li>
            </ol>
            <div>
              <p>
                Sigueme en GitHub 
                <a className="link github" href="https://github.com/xTonaitox/">
                  <i className="icon-github"></i>
                </a>
              </p>
              <p>
                Sigueme en Twitter 
                <a className="link twitter" href="https://twitter.com/Tonalli_Lopez">
                  <i className="icon-twitter"></i>
                </a>
              </p>
              <p>
                Sigueme en Instagram 
                <a className="link instagram" href="https://www.instagram.com/tonallilopez/">
                  <i className="icon-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contacto;