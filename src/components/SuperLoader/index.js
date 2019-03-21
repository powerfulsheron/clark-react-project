import React from 'react';
import './style/stylesheet-superman.css';

class SuperLoader extends React.Component {

    render() {
        const styleImage =
            {
                margin: 'auto',
                marginTop: '25vh',
                marginLeft: '25vw',
                width: '50vw',
            };
        const styleH1 = {
            position: "absolute",
        fontWeight: "300",
        color:"#494949",
        fontSize: "20px",
        /*text-transform: uppercase;*/
        left: "47%",
        top: "70%",
        marginLeft:"-20px",
        fontFamily: "'Lato', sans-serif",
        }

        return(
          <>
              <div className="longfazers">

                  <span className=""></span>
                  <img style={styleImage} src={require("./style/supergif.gif")} alt="" />

                  <h1 style={styleH1}>Clark accède à votre requête...</h1>

              </div>
          </>
        );
        }

    }

export default SuperLoader;
