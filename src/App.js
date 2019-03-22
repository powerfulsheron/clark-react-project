import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import clark from './images/Logo.svg';
import {Container,Row,Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Grid container spacing={20}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8 }>
                        <img src={clark} alt="Clark Kent" height="300" width="300"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" style={{
                            backgroundColor: "#5CABCC",
                            color:"white",
                            borderRadius:"5px"
                        }}>
                            Register
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" style={{
                            backgroundColor: "#44D7B6",
                            color:"white",
                            borderRadius:"5px"
                        }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
                <Row>
                    <Col>
                        <label className="lpLabel">" Your SEO Super Hero "</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="lpheader">Générez vos mots clés qualifiés</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Grid container spacing={20}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="🔍 ex : Trump"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="contained" className="primary" style={{
                            backgroundColor: "#6995d7",
                            color:"white",
                            borderRadius:"5px"
                        }}>
                            Essayez gratuitement
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Grid container spacing={20}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <h1 className="lpheader">Interpretation</h1>
                        <label className="lppara">Des datas sous forme de bubble chart, en fonction de la position d'un mot dans son reférencement</label>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <img src={require("./images/Loupe-Animated.gif")} alt="loading..." height="225" width="420"></img>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
                <Grid>
                    <br></br>
                </Grid>
                <Grid>
                    <br></br>
                </Grid>
                <Grid>
                    <br></br>
                </Grid>
                <Grid container spacing={20}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs>
                        <img src={require("./images/Gear-Animated.gif")} alt="loading..." height="225" width="420"></img>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={3}>
                        <h1 className="lpheader">Customisation</h1>
                        <label className="lppara">De la Dataviz en fonction de stratégie souhaitée, avec des paramètres avancés</label>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
                <Grid>
                    <br></br>
                </Grid>
            </Container>
        </div>
    );
  }
}

export default App;
