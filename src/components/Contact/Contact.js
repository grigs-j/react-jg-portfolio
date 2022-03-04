import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

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
                    <Link
                        to="//mailto:grigsbyjonathan@gmail.com"
                        target="_blank"
                        className={classes.link}
                    >
                        email me
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Contact;
