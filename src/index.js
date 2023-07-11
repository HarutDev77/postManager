import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    
    palette: {
        secondary: {
            main: '#000000',
        },
    },
    typography:{
        fontFamily: "cursive"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize"

                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    fontSize: "14px"
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "12px"
                }
            }
        }

    }
});

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
);

