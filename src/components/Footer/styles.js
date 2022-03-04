import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        paddingBottom: "4rem",
    },
    topLink: {
        display: "flex",
        width: "55px",
        fontSize: "1.75rem",
        color: "#0c1027",
        justifyContent: "flex-end",
        "&:hover": {
            color: "#a8aaff",
        },
    },
    grow: {
        flexGrow: 1,
    },
}));
