import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage]=useState("");
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
        dispatch(setAuthorization(true));
        window.location.reload();
      }).catch(error => {
        console.log(error.response);
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        }
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
        {message && <Message
          error
          header={message}
        />}
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
                onChange={(e) => setpassword(e.target.value)}
              />

              <Button color="teal" fluid size="large" onClick={loginApiCall}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Button secondary>Register</Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
