import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100vw",
    },
    grid: {
        height: "100vh",
        width: "100vw",
    },
    text: {
        fontWeight: "700",
        color: "#a8aaff",
        marginBottom: "1rem",
    },
    subtext: {
        marginBottom: "1.5rem",
    },
    link: {
        display: "block",
        margin: "0 auto",
        width: "150px",
        fontSize: "1.75rem",
        color: "#0c1027",
        transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "#a8aaff",
        },
    },
}));
