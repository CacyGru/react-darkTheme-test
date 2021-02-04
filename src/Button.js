import React, { useState } from 'react'
import styled from 'styled-components'


const Button = () => {

    const [hoverState, setHoverState] = useState("") 

const hoverHandler = () => {
    hoverState === "" ? setHoverState("active") : setHoverState("")
}

const Button = styled.button`
color:green;
`

    return (
        <Button className={hoverState}  onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
            Some Text
        </Button>
    )
}

export default Button
