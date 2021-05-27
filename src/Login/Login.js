import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Button,
  Segment,
  Grid,
  Form,
  Header,
  Message,
} from "semantic-ui-react";
import {
  setBearerToken,
  setLoggedInUser,
} from "../Redux/Actions/userLoginActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Use States
  let [userEmail, setUserEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const loginAction = () => {
    console.log(userEmail, password);
    loginAPICall();
  };

  const loginAPICall = async () => {
    await axios
      .post("https://swagbag-node-app.herokuapp.com/api/user/login", {
        userEmail,
        password,
      })
      .then((response) => {
        console.log("Response", response);
        dispatch(setLoggedInUser(response.data.user));
        dispatch(setBearerToken(response.data.token));
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        console.log("Error", error.response);
        setMessage(error.response.data.message);
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        {message && <div className="ui negative message">
          <i className="close icon" onClick={e => setMessage("")}></i>
          <div className="header">{message}</div>
        </div>}
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large" onClick={loginAction}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Button>Sign Up</Button>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
