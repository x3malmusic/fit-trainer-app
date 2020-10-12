import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom"
import http from "../../services/http";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function SignIn() {
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

  React.useEffect(() => {setError('')},[email, password])

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
                <Button color="primary" onClick={login}>Sign In</Button>
              </CardFooter>
              <NavLink className="primary" style={{marginLeft: 15}} to="/signup">first time user? sign-up</NavLink>
            </Card>
          </GridItem>
        </GridContainer>
  )
}