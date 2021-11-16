import { ThemeProvider, createTheme } from "@material-ui/core";
import { StrictMode } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Chat, Profile, PageNone, Home } from "./pages";
import { Menu } from "./components";
import Styles from "./styles.module.css";

const theme = createTheme({
  light: {
    color: "#000",
    backgroundColor: "#fff",
    buttonColor: "red"
  },
  dark: {
    color: "#fff",
    backgroundColor: "#000",
    buttonColor: "blue"
  }
});

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <header className={Styles.header}>
          <Menu />
        </header>
        <Switch>
          <Route path="/chat" component={() => <Chat />} />
          <Route path="/profile" component={() => <Profile />} />
          <Route exact path="/" component={() => <Home />} />
          <Route path="*" component={() => <PageNone />} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);