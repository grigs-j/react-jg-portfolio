import React, { useRef } from "react";
import useStyles from "./styles";
import emailjs from "@emailjs/browser";
import { Grid, TextareaAutosize, TextField } from "@material-ui/core";

const EmailForm = () => {
    const classes = useStyles();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.init("IIKF4brUmkO0ILqZx");
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
                    alert(
                        "We've had an error. Please email grigsbyjonathan@gmail.com"
                    );
                }
            );
    };

    return (
        <Grid container>
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                    label="Name"
                    name="name"
                    variant="standard"
                    fullWidth
                    required
                    className={classes.nameLink}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="standard"
                    fullWidth
                    required
                    className={classes.emailLink}
                />
                <TextareaAutosize
                    name="message"
                    placeholder="Your Message"
                    className={classes.message}
                    minRows={3}
                />
                <input type="submit" value="SEND" className={classes.topLink} />
            </form>
        </Grid>
    );
};

export default EmailForm;
