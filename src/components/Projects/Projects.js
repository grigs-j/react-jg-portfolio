import { Grid, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <div id="projects"></div>

            <Grid container className={classes.container}>
                <Grid item>
                    <List>
                        <Typography
                            variant="h1"
                            gutterBottom
                            className={classes.title}
                        >
                            projects
                        </Typography>
                        <ListItem>
                            <Link
                                to="//react-commerce-stripe-app-2022.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                            >
                                bookstore e-commerce site
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="//reactmoviedbapp2021.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                            >
                                movie-search app
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="//michaelgrigsby.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                            >
                                michaelgrigsby.com
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="//gatheredwares.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                            >
                                gatheredwares.com
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/2048" className={classes.link}>
                                2048
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    );
};

export default Projects;
