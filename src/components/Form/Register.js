import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import clark from "../../images/Logo.svg";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import Login from "./Login"

class Register extends React.Component {

    state = {
        fullname: '',
        email: '',
        password:''
    };

    handleClick(event){
        var apiBaseUrl = "http://localhost:4000/users";
        console.log("values",this.state.fullname,this.state.email,this.state.password);
        var self = this;
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        var payload={
            fullname: this.state.fullname,
            email:this.state.email,
            password:this.state.password
        }
        console.log(payload);
        axios.post(apiBaseUrl+'/register', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("registration successfull");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            style={{ margin: 8 }}
                            placeholder="Clark Kent"
                            label="Nom"
                            fullWidth
                            margin="normal"
                            onChange = {(event,newValue) => this.setState({fullname:event.target.value})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            style={{ margin: 8 }}
                            placeholder="On ne spamme pas, promis"
                            label="Email"
                            fullWidth
                            margin="normal"
                            onChange = {(event,newValue) => this.setState({email:event.target.value})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
                            style={{ margin: 8 }}
                            label="Password"
                            fullWidth
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange = {(event,newValue) => this.setState({password:event.target.value})}
                            placeholder="Superman"
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <TextField
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
                        <Button variant="contained" className="primary" href={"/login"} onClick={(event) => this.handleClick(event)} fullWidth style={{
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