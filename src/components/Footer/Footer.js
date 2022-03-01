import React from "react";
import { Link } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <Link href="#" className={classes.topLink}>
            top
        </Link>
    );
};

export default Footer;
