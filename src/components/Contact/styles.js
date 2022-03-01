import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    link: {
        color: "#0c1027",
        cursor: "pointer",
        fontSize: "2rem",
        "&:hover": {
            color: "#a8aaff",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.5rem",
        },
    },
    container: {
        margin: "6rem 0",
    },
    title: {
        color: "#0c1027",
        fontWeight: "700",
        marginBottom: "2rem",
        width: "80%",
    },
}));
