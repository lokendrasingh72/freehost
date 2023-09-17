import React, { Component } from "react";
import { Grid, Typography, FormControlLabel, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import CustomTextField from "../../component/mui/Textfield";
import CustomButton from "../../component/mui/button";
import { ValidatePassword,validateEmail } from "../../helper/ValidateForm";
import { LoginService } from "../../services/api/user";
import { ContactBlock, Error_msg, Heading_main } from "../../globle";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      msg: null,
      showMsg: false,
      disabled: false,
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "username":
        if (!validateEmail(e.target.value)) {
          this.setState({
            msg: "Email is Invalid",
            showMsg: true,
            disabled: true,
          });
        } else {
          this.setState({
            msg: null,
            showMsg: false,
            disabled: false,
          });
        }
        this.setState({
          data: {
            ...this.state.data,
            [e.target.id]: e.target.value,
          },
        });
        break;

      case "password":
        if (!ValidatePassword(e.target.value)) {
          this.setState({
            msg: "password is Invalid",
            showMsg: true,
            disabled: true,
          });
        } else {
          this.setState({
            msg: null,
            showMsg: false,
            disabled: false,
          });
        }

      default:
        this.setState({
          data: {
            ...this.state.data,
            [e.target.id]: e.target.value,
          },
        });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    LoginService(this.state.data)
      .then((e) => {
        localStorage.setItem("token", "QpwL5tke4Pnpja7X4");
        this.setState({
          msg: "succesfully login",
          showMsg: true,
        });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      })
      .catch((err) => {
        this.setState({
          msg: err.error,
          showMsg: true,
        });
        setTimeout(() => {
          this.setState({
            msg: null,
            showMsg: false,
            data: {
              username: "",
              password: "",
            },
          });
        }, 1000);
      });
  };

  render() {
    console.log(this.state);
    const paperStyle = {
      padding: 20,
      height: "70vh",
      width: 280,
      margin: "20px auto",
    };

    const btnstyle = { margin: "8px 0" };

    return (
      <>
        <Typography>
          {" "}
          Login Form :- {this.state.username}
          {this.state.password}
        </Typography>

        <Grid>
          <ContactBlock elevation={10} style={paperStyle}>
            <Grid align="center">
              <Heading_main variant="h4">Login</Heading_main>
            </Grid>

            <Error_msg>
              {this.state.showMsg ? <Box>{this.state.msg}</Box> : null}
            </Error_msg>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <CustomTextField
                label="Username"
                id="username"
                type="text"
                required={true}
                placeholder="Enter Email"
                value={this.state.data.username}
                fullWidth
                onChange={(e) => this.handleChange(e)}
              />
              <CustomTextField
                label="Password"
                id={"password"}
                value={this.state.data.password}
                placeholder="Enter password"
                type="password"
                required={true}
                fullWidth
                onChange={(e) => this.handleChange(e)}
              />

              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <CustomButton
                type="submit"
                color="primary"
                disabled={this.state.disabled}
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign in
              </CustomButton>
            </form>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?<Link to="/signup">Sign Up</Link>
            </Typography>
          </ContactBlock>
        </Grid>
      </>
    );
  }
}

export default LoginComponent;
