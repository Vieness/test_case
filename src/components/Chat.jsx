import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, SnackbarContent, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const useStyles = makeStyles((theme) => ({
    grid: {
        height: window.innerHeight - 50,
        paddingTop: "50px",
        justifyContent: "center"
    },
    chat: {
        width: "600px",
        height: "auto",
        backgroundColor: "#f1f2f7"
    },
    message: {
        paddingBottom: "5px",
        width: "60%",
        height: "auto",
    },
    messageBorder: {
        backgroundColor: "#3f51b5"
    }
    ,
    messageNavigation: {
        paddingTop: "5px",
        width: "600px",
        borderColor: "#3f51b5"

    },
    textFieldSend: {
        paddingBottom: "5px",
        paddingRight: '5%',
        width: "60%",
        height: ' 55px',
    },
    buttonSend: {
        height: ' 55px',
        width: "35%",
    }
}));

const Chat = () => {
    const classes = useStyles()

    const {auth, fireStore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        fireStore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        fireStore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    if (loading) {
        return <Loader/>
    }
    return (
        <Container>
            <Grid container className={classes.grid}>
                <Grid item md={8} className={classes.chat}>
                    <div className={classes.message}>
                        {messages.map(m =>
                            <div>

                                <div>
                                    <Avatar src={m.photoURL}/>
                                    <div>{m.displayName}</div>
                                    <SnackbarContent className={classes.messageBorder} message={m.text}/>
                                </div>

                            </div>
                        )}
                    </div>

                </Grid>
                <Grid item md={8} className={classes.messageNavigation}>
                    <TextField onChange={(e) => setValue(e.target.value)} value={value} rowsMax={2}
                               className={classes.textFieldSend} variant={"outlined"}/>

                    <Button onClick={sendMessage} variant={"outlined"} className={classes.buttonSend}>Send</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Chat;