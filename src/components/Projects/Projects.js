import {
    Grid,
    List,
    ListItem,
    Typography,
    Collapse,
    ListItemIcon,
    Card,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import LetsReadPreview from "../../assets/letreadpreview.PNG";
import reactMoviePreview from "../../assets/rmdb-mobile-preview.PNG";
import MGPreview from "../../assets/mg-mobile-preview.PNG";
import waresPreview from "../../assets/gatheredwares-mobile-preview.PNG";
import JGPreview from "../../assets/jg-portfolio-mobile-preview.PNG";
import jsGamePreview from "../../assets/2048-preview.PNG";
import { FaArrowUp } from "react-icons/fa";

const Projects = () => {
    const classes = useStyles();

    const [openProjectOne, setOpenProjectOne] = useState(false);
    const [openProjectTwo, setOpenProjectTwo] = useState(false);
    const [openProjectThree, setOpenProjectThree] = useState(false);
    const [openProjectFour, setOpenProjectFour] = useState(false);
    const [openProjectFive, setOpenProjectFive] = useState(false);
    const [openProjectSix, setOpenProjectSix] = useState(false);

    const handleProjectOne = () => {
        setOpenProjectOne(!openProjectOne);
    };
    const handleProjectTwo = () => {
        setOpenProjectTwo(!openProjectTwo);
    };
    const handleProjectThree = () => {
        setOpenProjectThree(!openProjectThree);
    };
    const handleProjectFour = () => {
        setOpenProjectFour(!openProjectFour);
    };
    const handleProjectFive = () => {
        setOpenProjectFive(!openProjectFive);
    };
    const handleProjectSix = () => {
        setOpenProjectSix(!openProjectSix);
    };
    return (
        <>
            <div id="projects"></div>
            <Grid item className={classes.container}>
                <List>
                    <Typography
                        variant="h1"
                        gutterBottom
                        className={classes.title}
                    >
                        projects
                    </Typography>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectOne}
                            className={classes.link}
                        >
                            let's read app{" "}
                            <ListItemIcon>
                                {openProjectOne ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectOne}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    An e-commerce kid's
                                                    bookstore
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={LetsReadPreview}
                                                    alt="Let's Read preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//react-commerce-stripe-app-2022.netlify.app/"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//https://github.com/grigs-j/react-stripe-e-commerce-store"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            REPO
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    Modern e-commerce web app
                                                    that allows users to search
                                                    for products, add them to
                                                    the cart, and check out with
                                                    Stripe API. I focused
                                                    heavily on React components,
                                                    hooks, and the Stripe API.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    JavaScript
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React.js
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Commerce.js
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Stripe API
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    MaterialUI
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>Styled</Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    CSS/SCSS
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React Router
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Adobe Illustrator
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectOne}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectTwo}
                            className={classes.link}
                        >
                            react/movie app{" "}
                            <ListItemIcon>
                                {openProjectTwo ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectTwo}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    A movie search database app
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={reactMoviePreview}
                                                    alt="ReactMOVIE preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//https://reactmoviedbapp2021.netlify.app/"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//https://github.com/grigs-j/React-movie-search-database"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            REPO
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    This is a fully responsive
                                                    single page application(SPA)
                                                    that searches a database to
                                                    find movie information. I
                                                    focused on React hooks,
                                                    components, and states.
                                                    Axios calls to API endpoints
                                                    to pull information. I used
                                                    no styling library, only
                                                    focusing on SCSS and styled.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    JavaScript
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React.js
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    RESTful API
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>Styled</Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    CSS/SCSS
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React Router
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectTwo}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectThree}
                            className={classes.link}
                        >
                            author's site{" "}
                            <ListItemIcon>
                                {openProjectThree ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectThree}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    An author's website
                                                    promoting new book(under
                                                    construction)
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={MGPreview}
                                                    alt="michaelgrigsby.com preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//michaelgrigsby.com"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    Author's webiste to promote
                                                    new book and have call to
                                                    action to amazon when book
                                                    comes out. Site has a
                                                    working mailing list
                                                    submission form and contact
                                                    form through FormSubmit.
                                                    Adobe Illustrator used to
                                                    edit images.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    JavaScript
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    FormSubmit
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    CSS/SCSS
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>HTML5</Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Adobe Illustrator
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectThree}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectFour}
                            className={classes.link}
                        >
                            vendor's site{" "}
                            <ListItemIcon>
                                {openProjectFour ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectFour}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    A local vendor's CMS site
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={waresPreview}
                                                    alt="gatheredwares.com preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//gatheredwares.com"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    Modern e-commerce Wix
                                                    website for a local vendor.
                                                    Worked with Wix and Wix
                                                    themes for UI. Connected
                                                    instagram as main
                                                    call-to-action and used
                                                    Adobe Illustrator for the
                                                    logo.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Wix Tools
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Adobe Illustrator
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectFour}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectFive}
                            className={classes.link}
                        >
                            this site{" "}
                            <ListItemIcon>
                                {openProjectFive ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectFive}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    This very site!
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={JGPreview}
                                                    alt="jongrigsby.com preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//jongrigsby.com"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//https://github.com/grigs-j/react-jg-portfolio"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            REPO
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    A portfolio website
                                                    showcasing my UI/UX design.
                                                    Really got comfortable with
                                                    React, MaterialUI, React
                                                    Router with this portfolio.
                                                    Worked with components,
                                                    hooks, and state.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    JavaScript
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React.js
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    MaterialUI
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Styled Components
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    CSS/SCSS
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    React Router
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    Adobe Illustrator
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectFive}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    {/* NEW PROJECTT CARD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
                    <ListItem className={classes.projectListContainer}>
                        <Typography
                            onClick={handleProjectSix}
                            className={classes.link}
                        >
                            2048 game{" "}
                            <ListItemIcon>
                                {openProjectSix ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemIcon>
                        </Typography>
                        <Card>
                            <Collapse
                                in={openProjectSix}
                                timeout={{ enter: 900, exit: 600 }}
                                unmountOnExit
                                className={classes.card}
                            >
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.subtitle}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    A game made with vanilla
                                                    Javascript, HTML, and CSS
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <img
                                                    src={jsGamePreview}
                                                    alt="2048, JavaScript game preview"
                                                    className={classes.previews}
                                                />
                                            </ListItem>
                                            <Grid item className={classes.list}>
                                                <List>
                                                    <ListItem
                                                        className={
                                                            classes.btnLinkContainer
                                                        }
                                                    >
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="/2048"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            LIVE
                                                        </Link>
                                                        <Link
                                                            className={
                                                                classes.btnLink
                                                            }
                                                            to="//https://github.com/grigs-j/js-2048-game"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            REPO
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem
                                                className={classes.projText}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    align="center"
                                                    gutterBottom
                                                >
                                                    A fun game based off the
                                                    original 2048. Focused on
                                                    building an app without
                                                    libraries, that was heavily
                                                    reliant on JavaScript
                                                    methods.
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography
                                                    variant="h5"
                                                    className={
                                                        classes.projTitle
                                                    }
                                                >
                                                    Tools Used:
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>
                                                    JavaScript
                                                </Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>CSS3</Typography>
                                            </ListItem>
                                            <ListItem className={classes.list}>
                                                <Typography>HTML5</Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Typography
                                    className={classes.topLink}
                                    onClick={handleProjectSix}
                                    gutterBottom
                                    align="center"
                                >
                                    BACK UP <FaArrowUp />
                                </Typography>
                            </Collapse>
                        </Card>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
};

export default Projects;
