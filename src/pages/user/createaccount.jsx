import React, { Component } from "react";
import { Grid, Typography, Box } from "@mui/material";
import CustomTextField from "../../component/mui/Textfield";
import CustomButton from "../../component/mui/button";
import { validateEmail, ValidatePassword } from "../../helper/ValidateForm";
import { SignupService } from "../../services/api/user";
import { ContactBlock, Error_msg, Heading_main } from "../../globle";

class CreateAccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
        confirmpassword: "",
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
            msg: "username is Invalid",
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
        this.setState({
          data: {
            ...this.state.data,
            [e.target.id]: e.target.value,
          },
        });
        break;

      case "confirmpassword":
        if (e.target.value !== this.state.data.password) {
          this.setState({
            msg: "password is not matched",
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

    SignupService(this.state.data)
      .then((e) => {
        localStorage.setItem("id", "4");
        this.setState({
          msg: "succesfully CreateAccount",
          showMsg: true,
        });

        setTimeout(() => {
          window.location.href = "/login";
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
            },
          });
        }, 1000);
      });
  };

  render() {
    console.log(this.state);

    const paperStyle = {
      padding: 35,
      height: "50vh",
      width: 280,
      margin: "20px auto",
    };

    const btnstyle = { margin: "8px 0" };
    return (
      <>
        <Typography>
          {" "}
          Signup Form :- {this.state.username}
          {this.state.password}
        </Typography>
        <Grid>
          <ContactBlock elevation={10} style={paperStyle}>
            <Grid align="center">
              <Heading_main variant="h4">Sign Up</Heading_main>
            </Grid>
            <Error_msg>
              {this.state.showMsg ? <Box>{this.state.msg}</Box> : null}
            </Error_msg>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <CustomTextField
                label="Username"
                id="username"
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
              <CustomTextField
                label="Confirm Password"
                id={"confirmpassword"}
                value={this.state.data.confirmpassword}
                placeholder="Enter confirm password"
                type="password"
                required={true}
                fullWidth
                onChange={(e) => this.handleChange(e)}
              />

              <CustomButton
                type="submit"
                color="primary"
                disabled={this.state.disabled}
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                sign up
              </CustomButton>
            </form>
          </ContactBlock>
        </Grid>
      </>
    );
  }
}

export default CreateAccountComponent;
