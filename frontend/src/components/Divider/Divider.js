import React from 'react'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
  root: {
    width: '100%',
    marginTop: 20
  }
})

export default function MyDivider(props) {
  const classes = useStyle()

  return <Divider classes={{root: classes.root }}/>
}