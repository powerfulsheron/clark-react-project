import React from "react";

class LexControl extends React.Component {




    render() {

        const styleLex =
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
        }
        return(
            <>
                <div className="">

                    <span className=""></span>
                    <img style={styleLex} src={require("./style/LEX.gif")} alt="" />

                    <h1 style={styleH1}>Il n'y a pas de mots clés, Lex a dû passer par là...</h1>

                </div>
            </>
        );
    }


}

export default LexControl;
