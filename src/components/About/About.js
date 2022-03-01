import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const About = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item>
                <Typography variant="h1" className={classes.title} gutterBottom>
                    about me
                </Typography>
                <Typography className={classes.text}>
                    using over a decade of fine-dining culinary experience, i am
                    enthusiastically diving into the digital world to create
                    visually pleasing experiences. i am passionate about
                    javascript logic and creativity coming together.
                </Typography>
                <Typography variant="h6">
                    currently looking to be hired!
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;