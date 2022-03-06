import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    title: {
        color: "#a8aaff",
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
        "&:focus": {
            color: "#a8aaff",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.75rem",
        },
    },
    container: {
        margin: "6rem 0",
    },
    previews: {
        display: "block",
        width: "100%",
        objectFit: "cover",
        height: "500px",
    },
    projTitle: {
        fontWeight: "700",
        color: "#a8aaff",
        justifyContent: "center",
    },
    list: {
        justifyContent: "center",
        paddingTop: "0",
    },
    projectListContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    projText: {
        marginBottom: "2rem",
    },
    card: {
        padding: ".25rem",
        background: "rgba(168, 169, 255,0.15)",
    },
    btnLink: {
        display: "flex",
        justifyContent: "center",
        fontSize: "1.75rem",
        color: "#0c1027",
        margin: "0rem 1rem",
        "&:hover": {
            color: "#a8aaff",
        },
    },
    topLink: {
        cursor: "pointer",
        fontSize: "1.25rem",
        color: "#a8aaff",
        margin: "2rem auto",
        width: "125px",
    },
    btnLinkContainer: {
        justifyContent: "center",
    },
    subtitle: {
        justifyContent: "center",
        color: "#a8aaff",
    },
}));
