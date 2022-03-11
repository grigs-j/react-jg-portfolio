import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import useStyles from "./styles";
import { Button, Grid, TextField } from "@material-ui/core";

const EmailForm = () => {
    const classes = useStyles();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6t7xuse",
                "template_5gnuu3g",
                form.current,
                "IIKF4brUmkO0ILqZx"
            )
            .then(
                (result) => {
                    window.open("https://jongrigsby.com/thanks");
                },
                (error) => {
                    alert("FAILED", error.text);
                }
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <Grid container>
                <TextField
                    className={classes.name}
                    label="Name"
                    type="text"
                    name="name"
                    variant="standard"
                    required
                />
                <TextField
                    className={classes.email}
                    label="Email"
                    type="text"
                    name="email"
                    variant="standard"
                    required
                />
                <Button
                    className={classes.btn}
                    variant="text"
                    size="medium"
                    type="submit"
                    name="Send"
                    disableRipple
                >
                    Send
                </Button>
            </Grid>
        </form>
    );
};

export default EmailForm;
