import React from 'react'
import { Container } from './style'

export const MainContainer = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}