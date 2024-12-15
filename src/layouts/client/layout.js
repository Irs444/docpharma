import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'

const ClientLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </Fragment>
    )
}

export default ClientLayout