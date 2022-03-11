import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ThanksPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.container}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={classes.grid}
            >
                <Grid item>
                    <Typography
                        variant="h2"
                        align="center"
                        className={classes.text}
                    >
                        Thanks for reaching out!
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        className={classes.subtext}
                    >
                        I will get back to you shortly.
                    </Typography>
                    <Link to="/" className={classes.link}>
                        main page
                    </Link>
                </Grid>
            </Grid>
        </main>
    );
};

export default ThanksPage;
