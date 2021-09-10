import React, {useContext, useState} from 'react';
import {Button, Input} from "@material-ui/core";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const NewChat = () => {
    const [id, setId] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [room, setRoom] = useState("");

    const [auth] = useContext(Context)
    const [user] = useAuthState(auth)
/*    const handleSubmit = e => {
        e.preventDefault();
        if (!nameInput) {
            return alert("Name can't be empty");
        }
        setId(name);
        socket.emit("join", name, room);

    };*/
    return (
        <div>
            <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
                <form >
                    <Input
                        id="name"
                        onChange={e => setNameInput(e.target.value.trim())}
                        required
                        placeholder="What is your name .."
                    />
                    <br />
                    <Input
                        id="room"
                        onChange={e => setRoom(e.target.value.trim())}
                        placeholder="What is your room .."
                    />
                </form>
                <Button type="submit">Submit</Button>
            </div>
            );
            };
        </div>
    );
};

export default NewChat;