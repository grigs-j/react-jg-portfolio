import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    navGridContainer: {
        paddingTop: "10rem",
        justifyContent: "center",
        position: "relative",
        flexWrap: "nowrap",
        [theme.breakpoints.up("md")]: {
            paddingTop: "6rem",
        },
    },
    navGridText: {
        color: "#0c1027",
        [theme.breakpoints.up("md")]: {
            paddingLeft: "6rem",
        },
        [theme.breakpoints.up("lg")]: {
            paddingLeft: "14rem",
        },
    },
    navToggle: {
        position: "absolute",
        top: "1.5rem",
        right: ".35rem",
        width: "2.6rem",
        height: "2.6rem",
        cursor: "pointer",
    },
    title: {
        fontWeight: "700",
        marginBottom: "2rem",
        color: "#a8aaff",
    },
    navLink: {
        fontWeight: "400",
        fontSize: "2.5rem",
        color: "#0c1027",
        cursor: "pointer",
        "&:hover": {
            color: "#a8aaff",
        },
    },
    navIcons: {
        marginRight: "1rem",
        color: "#0c1027",
        cursor: "pointer",
        "&:hover": {
            color: "#a8aaff",
        },
    },
    iconsContainer: {
        marginTop: "2rem",
        fontSize: "2.75rem",
    },
    navSkills: {
        fontSize: "2rem",
        marginBottom: "1.25rem",
    },
    skill: {
        marginRight: "1rem",
    },
    drawer: {
        width: "100%",
        height: "100vh",
    },
    navCloseButton: {
        position: "absolute",
        top: "1.75rem",
        right: "2.55rem",
        width: "2rem",
        height: "2rem",
        cursor: "pointer",
    },
    navMobileList: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
}));
