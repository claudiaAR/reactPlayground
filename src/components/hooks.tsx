import React, { useState } from 'react'

interface Props { 
    mainImg: string; 
    mainTitle: string; 
    buttonHoverColor: string;
    alt: string;
}


function SectionItem(props: Props) {

    const [isHovering, setIsHovering] = useState(false)

    return(
        <button
            style={isHovering ? {backgroundColor: props.buttonHoverColor} : undefined}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
        <div style={imgFlex}>
            <img style={image} src={props.mainImg} alt={props.alt}/>
            <h1 style={centerTitle}> {props.mainTitle} </h1>
        </div>
        </button>
    )
}

const imgFlex: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '30%',
    width: '100%',
    position: 'relative'
}

const centerTitle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    translate: 'translate(50%, -50%)'
}

const image: React.CSSProperties = {
    width: '95vw',
    height: '29vh',
    objectFit: 'cover',
    margin: '0.5rem 0rem'
}



export default SectionItem