import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import clark from "../../images/Logo.svg";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

class Register extends React.Component {
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
                        <img src={clark} alt="Clark Kent" height="200" width="200"></img>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid>
                        <h4>
                            Ravi de te rencontrer !
                        </h4>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Clark Kent"
                            label="Nom"
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
                            placeholder="On ne spamme pas, promis"
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
                            id="standard-password-input"
                            style={{ margin: 8 }}
                            label="Password"
                            fullWidth
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Superman"
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            id="standard-password-input"
                            style={{ margin: 8 }}
                            label="Confirmation"
                            fullWidth
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Superman"
                            margin="normal"
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
                            backgroundColor: "#6995d7",
                            color:"white",
                            borderRadius:"30px",
                            margin:"8px"
                        }}>
                            JE M'INSCRIS
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid>
                        Tu as déja un compte ? <a style={{color:"#44d7b6",textDecoration:"none"}} href={"/login"}>C'est ici !</a>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Register;