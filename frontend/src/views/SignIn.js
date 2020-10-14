import React, { useState } from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
import CardFooter from "../components/Card/CardFooter";
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom"
import { styles } from "../assets/jss/material-dashboard-react/views/authStyle";

const useStyles = makeStyles(styles);

export default function SignIn(props) {

  const { loginUser, error } = props
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    loginUser({email, password})
  }

  return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Sign into Fit Trainer App</h4>
                <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address"
                      inputControl={setEmail}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Password"
                      id="password"
                      type="password"
                      inputControl={setPassword}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Button color="primary" onClick={login}>Sign In</Button>
                  </GridItem >
                </ GridContainer>
              </CardFooter>
              <GridContainer style={{paddingBottom: 15}}>
                <GridItem xs={12} sm={12} md={6}>
                  <NavLink className="primary" style={{marginLeft: 15, textDecoration: 'none'}} to="/signup">first time user? sign-up</NavLink>
                </GridItem >
              </ GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
  )
}