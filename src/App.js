import "./globalstyles.css";
import {
    Container,
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider,
} from "@material-ui/core";
import {
    Nav,
    About,
    Projects,
    Contact,
    Footer,
    ThanksPage,
} from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

let theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans",
    },
});
theme = responsiveFontSizes(theme);

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Container
                                    maxWidth="md"
                                    className="mainContainer"
                                >
                                    <Nav />
                                    <Projects />
                                    <About />
                                    <Contact />
                                    <Footer />
                                </Container>
                            </>
                        }
                    />
                    <Route
                        path="/thanks"
                        element={
                            <>
                                <ThanksPage />
                            </>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
