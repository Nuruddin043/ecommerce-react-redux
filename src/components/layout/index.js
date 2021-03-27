import React from 'react';
import {Container} from '@material-ui/core'
import Header from '../header'

const Layout=({children})=>{
    return(
        <> 

       <Header />
        <Container>
            {children}
        </Container>

        </>
    )
}

export default  Layout;