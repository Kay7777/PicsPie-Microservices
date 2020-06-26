import React from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Container,
  Snackbar,
} from "@material-ui/core";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    userName: "",
    error: false,
  };

  handleSignUp = async () => {
    const { email, password, userName } = this.state;
    const doc = await axios.post("/api/auth/signup", {
      email,
      password,
      userName,
    });
    if (doc.data.err) {
      this.setState({ error: true });
    } else {
      window.location = "/";
    }
  };

  render() {
    const { email, password, userName, error } = this.state;
    return (
      <div style={{ position: "relative", top: 70 }}>
        <Container className="text-center">
          <CardContent>
            <Typography color="textSecondary" style={{ fontSize: 40 }}>
              PicsPie
            </Typography>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              style={{ width: 300, marginTop: 10 }}
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
            <TextField
              id="standard-basic"
              label="userName"
              style={{ width: 300, marginTop: 10 }}
              value={userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              style={{ width: 300, marginTop: 10 }}
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{
                width: 300,
                marginTop: 10,
                backgroundColor: "#0F9D58",
              }}
              onClick={this.handleSignUp}
            >
              Sign Up
            </Button>
            <br />
            {/* <Button
              variant="contained"
              color="primary"
              style={{
                width: 300,
                marginTop: 10,
                backgroundColor: "#4285F4",
              }}
              href="/api/google"
            >
              Google Account
            </Button> */}
          </CardContent>
        </Container>
        <Snackbar open={error} autoHideDuration={2000}>
          <Alert
            severity="error"
            onClose={() => this.setState({ error: false })}
          >
            This Email has been registed!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default SignUp;
