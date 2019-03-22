import React from 'react';
import './style/stylesheet-superman.css';

class SuperLoader extends React.Component {

    render() {
        const styleImage =
            {
                width: '50vw',
                margin: '0 auto',
                position: 'relative',
                top: '100px',
            };
        const styleH1 = {
            fontWeight: "300",
            margin: '0 auto',
            position: 'relative',
            top: '100px',
            color:"#494949",
            fontSize: "20px",
            fontFamily: "'Lato', sans-serif",
        };
        const span = {
            zIndex: 1,
        };

        return(
          <>
              <div className="longfazers">

                  <span style={span}></span>
                  <img style={styleImage} src={require("./style/supergif.gif")} alt="" />

                  <h1 style={styleH1}>Clark accède à votre requête...</h1>

              </div>
          </>
        );
        }

    }

export default SuperLoader;
