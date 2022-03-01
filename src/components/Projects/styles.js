import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    title: {
        color: "#0c1027",
        fontWeight: "700",
    },
    link: {
        fontSize: "2rem",
        marginBottom: ".5rem",
        color: "#0c1027",
        cursor: "pointer",
        "&:hover": {
            color: "#a8aaff",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.75rem",
        },
    },
    container: {
        margin: "6rem 0",
    },
}));
