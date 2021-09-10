import React, {useContext} from 'react';
import {Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {Context} from "../index";
import firebase from "firebase/compat";

const useStyles = makeStyles((theme) => ({
    grid: {
        height: window.innerHeight - 50,
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles()
    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }
    return (
        <Container>
            <Grid container className={classes.grid}>
                <Grid>
                    <Box p={5}>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <Button onClick={login} variant={"outlined"}> Google Login</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;