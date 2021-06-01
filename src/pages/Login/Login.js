import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Button,
  Message,
} from "semantic-ui-react";
import {
  setAccessToken,
    setAuthorization,
  setuserLoggedIn,
} from "../../Redux/Actions/loginActions";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setpassword] = useState("");
  const loginApiCall = async () => {
    await axios
      .post("http://localhost:3200/user/login", {
        userEmail,
        password,
      })
      .then((response) => {
        dispatch(setuserLoggedIn(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        dispatch(setAccessToken(response.data.token));
        localStorage.setItem("token", response.data.token);
        console.log("Entering first");
        history.push('/');
        dispatch(setAuthorization(true));
      });
  };
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
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
                onChange={(e) => setpassword(e.target.value)}
              />

              <Button color="teal" fluid size="large" onClick={loginApiCall}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Button secondary>Signup</Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
