import React from 'react'
import classes from './Title.module.css'

function Title(props){
    let classprop = `${classes.title} + ${props.className}`
    return <div className={classprop}>
        <h1>The Generics</h1>
        {props.children}
    </div>
}

export default React.memo(Title)