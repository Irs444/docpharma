import React from 'react'
import Head from 'next/head'

const Heading = ({ title }) => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </Head>
        </div>
    )
}

export default Heading