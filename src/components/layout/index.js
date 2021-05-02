import React from 'react';
import {Container} from '@material-ui/core'
import Header from '../header'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout=({children})=>{
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#292f33',
            },
            secondary: {
                main: '#f5f8fa',
               
                
            }
        }
    })

    return(
        <> 
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
            <Container>
                {children}
            </Container>
    </ThemeProvider>
        </>
    )
}

export default  Layout;