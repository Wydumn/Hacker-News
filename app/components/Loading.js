import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const styles = {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
}

export default function Loading({speed, text}) {
    const [content, setContent] = useState(text)

    const id = useRef(null) 

    useEffect(() => {
        id.current = window.setInterval(() => {
            content === text + '...'
            ? setContent(text)
            : setContent(content + '.')
        }, speed)

        return () => clearInterval(id.current)
    }, [speed, text, content])

    return (
        <p style={styles}>
            {content}
        </p>
    )
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}