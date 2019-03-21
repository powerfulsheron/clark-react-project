import React from 'react';
import './style/stylesheet-superman.css';

class SuperLoader extends React.Component {

    render() {
        return(
          <>
              <div className="longfazers">

                  <span className=""></span>
                  <img src={require("./style/supergif.gif")} alt="" />

                  <h1>Clark accède à votre requête...</h1>

              </div>
          </>
        );
        }

    }

export default SuperLoader;
