import React, {useState} from "react";
import query from 'query-string'
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import CustomInput from "../components/CustomInput/CustomInput";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/CustomButtons/Button";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../assets/jss/material-dashboard-react/views/authStyle";

const useStyles = makeStyles(styles);


export default function EmailVerify(props) {

  const [code, setCode] = useState('')

  const { location, verifyUser } = props
  const queryString = query.parse(location.search)

  const classes = useStyles();

  const verifyEmail = () => {
    verifyUser({email: queryString.email, code})
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
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email Address"
                  id="email-address"
                  inputProps={{disabled: true, value:queryString.email }}
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
                  inputControl={setCode}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={verifyEmail}>VERIFY EMAIL</Button>
          </CardFooter>
          <NavLink className="primary" style={{marginLeft: 15}} to="/signup">Already have an account? sign in</NavLink>
        </Card>
      </GridItem>
    </GridContainer>
  )
}