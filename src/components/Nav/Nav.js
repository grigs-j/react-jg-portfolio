import {
    Grid,
    List,
    ListItem,
    Typography,
    Hidden,
    SwipeableDrawer,
} from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";
import {
    FaGithubSquare,
    FaLinkedin,
    FaWindowClose,
    FaHtml5,
    FaJsSquare,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../../assets/JonathanGrigsbyResume.pdf";

const Nav = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Grid container className={classes.navGridContainer}>
            <Grid item>
                <Hidden mdUp>
                    <MenuRounded
                        className={classes.navToggle}
                        onClick={() => setOpen(true)}
                    />
                </Hidden>
                <Hidden smDown>
                    <List>
                        <ListItem>
                            <Link to="/" className={classes.navLink}>
                                HOME
                            </Link>
                        </ListItem>
                        <ListItem>
                            <a href="/#projects" className={classes.navLink}>
                                PROJECTS
                            </a>
                        </ListItem>
                        <ListItem>
                            <a
                                href={resume}
                                className={classes.navLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                RESUME
                            </a>
                        </ListItem>
                        <ListItem>
                            <Link to="/contact" className={classes.navLink}>
                                CONTACT
                            </Link>
                        </ListItem>
                    </List>
                </Hidden>
            </Grid>
            <Grid item className={classes.navGridText}>
                <Typography className={classes.title} variant="h1">
                    jonathan grigsby
                </Typography>
                <Grid item className={classes.navSkills}>
                    <FaHtml5 className={classes.skill} />
                    <FaCss3Alt className={classes.skill} />
                    <FaJsSquare className={classes.skill} />
                    <FaReact className={classes.skill} />
                    <FaNodeJs className={classes.skill} />
                </Grid>
                <Typography variant="h6">
                    front-end react web developer
                </Typography>
                <Typography variant="h6">
                    creative design with a caffeinated heart
                </Typography>
                <div className={classes.iconsContainer}>
                    <Link
                        to="//github.com/grigs-j"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.navIcons}
                    >
                        <FaGithubSquare />
                    </Link>
                    <Link
                        to="//linkedin.com/in/jonathan-grigsby"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.navIcons}
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </Grid>
            <SwipeableDrawer
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                anchor="right"
                className={classes.drawer}
            >
                <FaWindowClose
                    onClick={() => setOpen(false)}
                    className={classes.navCloseButton}
                />
                <List>
                    <ListItem className={classes.navMobileList}>
                        <Link to="/" className={classes.navLink}>
                            HOME
                        </Link>
                    </ListItem>
                    <ListItem className={classes.navMobileList}>
                        <a href="/#projects" className={classes.navLink}>
                            PROJECTS
                        </a>
                    </ListItem>
                    <ListItem className={classes.navMobileList}>
                        <a
                            href={resume}
                            className={classes.navLink}
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </ListItem>
                    <ListItem className={classes.navMobileList}>
                        <Link to="/contact" className={classes.navLink}>
                            CONTACT
                        </Link>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </Grid>
    );
};

export default Nav;
