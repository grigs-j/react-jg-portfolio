import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    link: {
        color: "#0c1027",
        cursor: "pointer",
        fontSize: "2rem",
        transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "#a8aaff",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.5rem",
        },
    },
    container: {
        margin: "8rem 0",
    },
    title: {
        color: "#a8aaff",
        fontWeight: "700",
        marginBottom: "2rem",
    },
}));
