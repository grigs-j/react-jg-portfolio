import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    topLink: {
        display: "flex",
        fontSize: "1.75rem",
        color: "#0c1027",
        marginBottom: "4rem",
        justifyContent: "flex-end",
        "&:hover": {
            color: "#a8aaff",
        },
    },
}));
