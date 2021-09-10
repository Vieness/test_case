import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/const";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles()
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Grid container justify={"flex-end"}>
                        {user
                            ?
                            <Button onClick={()=>auth.signOut()} variant={"outlined"} color="inherit">Log Out</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button  variant={"outlined"} color="inherit">Login</Button>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;