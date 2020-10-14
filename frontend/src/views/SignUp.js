import React, { useEffect, useState } from "react";
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

export default function SignUp(props) {

  const { registerUser, error, setError } = props

  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const register = () => {
    if(password !== repeatPassword) {
      setError('Passwords do not match')
    } else if(password.length < 6) {
      setError('Password length should be at least 6 symbols')
    } else if(!email.includes('@')) {
      setError('Email is not valid')
    } else registerUser({email, password})
  }

  useEffect(() => { setError('') }, [email, password, repeatPassword, setError])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Register with Fit Trainer App</h4>
            <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
          </CardHeader>
          <CardBody>
            {error && (
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <p style={{color: 'red'}}>{error}</p>
                </GridItem>
              </GridContainer>
            )}
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
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Reapeat Password"
                  id="repeat-password"
                  type="password"
                  inputControl={setRepeatPassword}
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
                <Button color="primary" onClick={register}>Sign Up</Button>
              </GridItem >
            </ GridContainer>
          </CardFooter>
          <GridContainer style={{paddingBottom: 15}}>
            <GridItem xs={12} sm={12} md={6}>
              <NavLink className="primary" style={{marginLeft: 15, textDecoration: 'none'}} to="/signin">already have an account? sign-in</NavLink>
            </GridItem >
          </ GridContainer>
        </Card>
      </GridItem>
    </GridContainer>
  )

}