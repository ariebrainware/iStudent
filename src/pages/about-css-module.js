import React from 'react'

import styles from './about-css-module.module.css'
import Container from '../components/container'

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
            <User
                username="Paul Jenkins"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Paul Jenkins. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User 
                username="J Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm J Smith. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
                
            
        </Container>
    )
}