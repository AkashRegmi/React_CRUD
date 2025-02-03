    import React from 'react'

    const Button = ({name,style,onClick}) => {
    return (
        <div>
        <button  style={style} onClick={onClick}>{name}</button>
        </div>
    )
    }

    export default Button
