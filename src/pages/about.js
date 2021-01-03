import React from 'react'
import Header from '../components/header'

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText='About Gatsby' arbitraryPhrase='is arbitrary'/>
            <p>Such wow. Very React.</p>
        </div>
    )
}