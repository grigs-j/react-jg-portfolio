import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import EmailForm from "../EmailForm/EmailForm";

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <div id="contact"></div>
            <Grid container className={classes.container}>
                <Grid item>
                    <Typography variant="h1" className={classes.title}>
                        interested in working together?
                    </Typography>
                    <EmailForm />
                </Grid>
            </Grid>
        </>
    );
};

export default Contact;
