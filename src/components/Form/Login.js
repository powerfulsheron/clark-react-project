import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import clark from "../../images/Logo.svg";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            email:'',
            password:''
        }
    }
    render() {
        return (
            <div className="App">
                <Grid container justify={"center"}>
                    <Grid>
                        <img src={clark} alt="Clark Kent" height="300" width="300"></img>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid>
                        <h4>
                            Ravi de te revoir !
                        </h4>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Rapelle-nous ton email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Promis, on ne regarde pas"
                            label="Password"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid>
                        <br></br>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <Button variant="contained" className="primary" fullWidth style={{
                            backgroundColor: "#44d7b6",
                            color:"white",
                            borderRadius:"30px",
                            margin:"8px"
                        }}>
                           Login
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid>
                        Pas de compte ? <a style={{color:"#6995d7",textDecoration:"none"}} href={"/register"}>C'est ici !</a>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;