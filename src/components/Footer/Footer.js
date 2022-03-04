import React from "react";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <div className={classes.grow} />
            <Link href="#" className={classes.topLink}>
                top
            </Link>
        </Grid>
    );
};

export default Footer;
