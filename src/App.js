import "./globalstyles.css";
import {
    Container,
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider,
} from "@material-ui/core";
import { Nav, About, Projects, Contact, Footer } from "./components/index";
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
                <Container maxWidth="md">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <Container maxWidth="md">
                                        <Nav />
                                        <Projects />
                                        <About />
                                        <Contact />
                                        <Footer />
                                    </Container>
                                </>
                            }
                        />
                    </Routes>
                </Container>
            </ThemeProvider>
        </Router>
    );
}

export default App;
