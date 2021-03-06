import React, {useContext} from 'react';
import {Container, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
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
    create_chat: {
        textAlign: "left"
    }
}));
const Create = () => {
    const classes = useStyles();
    const [auth] = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <div>
            <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Button className={classes.create_chat} variant="contained" color="primary" href="new-chat">
                            Create Chanel
                        </Button>
                        <br/>
                        <Typography component="h1" variant="h5">
                            Welcome to Awesome Chat
                        </Typography>
                    </div>
            </Container>
        </div>
    );
};

export default Create;