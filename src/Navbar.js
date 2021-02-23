import * as React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const navLinks = [
    { title: `home`, path: `/home` },
    { title: `about us`, path: `/about-us` },
    { title: `people`, path: `/people` },
    { title: `contact`, path: `/contact` },
  ]


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
            <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
            <ListItemText primary={title} />
            </ListItem>
            </a>
            ))}
        </List>
        </Toolbar>
      </AppBar>
    )
  }
  export default Navbar