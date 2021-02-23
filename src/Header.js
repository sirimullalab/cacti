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

  


const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static" style={{ background: '#406E8E' }}>
           <center><h1>Center For AI-Driven Cancer Therapeutic Innovation</h1></center>
      </AppBar>
    )
  }
  export default Header