import React from 'react'

export default function LinkedButton(props) {
    return <a style={{ listStyle: `none`, color: `mauve`}} href={props.link}>{props.text}</a>
}