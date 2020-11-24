import { ThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./../../commons/Theme";
import configureStore from "./../../redux/configureStore";
import Taskboard from "./../Taskboard";
import styles from "./styles";
import GlobalLoading from './../../components/GlobalLoading';
import CommonModal from './../../components/CommonModal';

function App(props) {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <CommonModal />
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
