import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import {NavLink} from "react-router-dom";
import http from "../../services/http";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../../assets/jss/material-dashboard-react/views/authStyle";

const useStyles = makeStyles(styles);


export default function EmailVerify() {

  const classes = useStyles();

  const [error, setError] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const login = () => {
    try {
      http.post('/login', {email, password})
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Email verification to finish registration with Fit Trainer App</h4>
            <p className={classes.cardCategoryWhite}>Please, confirm email address</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              {error && (
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <p style={{color: 'red'}}>{error}</p>
                  </GridItem>
                </GridContainer>)}
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
                  labelText="Verification Code"
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
            <Button color="primary" onClick={login}>VERIFY EMAIL</Button>
          </CardFooter>
          <NavLink className="primary" style={{marginLeft: 15}} to="/signup">Already have an account? sign in</NavLink>
        </Card>
      </GridItem>
    </GridContainer>
  )
}