import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    form: {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "45%",
        },
    },
    emailLink: {
        [theme.breakpoints.up("sm")]: {
            width: "80%",
        },
    },
    nameLink: {
        marginBottom: ".75rem",
        [theme.breakpoints.up("sm")]: {
            width: "80%",
        },
    },
    message: {
        margin: "2rem 0",
        width: "100%",
    },
    topLink: {
        display: "block",
        width: "100px",
        background: "none",
        border: "none",
        fontSize: "1.75rem",
        color: "#0c1027",
        cursor: "pointer",
        "&:hover": {
            color: "#a8aaff",
        },
    },
}));
