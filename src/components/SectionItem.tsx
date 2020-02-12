import React from 'react'

interface Props { 
    mainImg: string; 
    mainTitle: string; 
}

function SectionItem(props: Props) {
    return(
        <div style={imgFlex}>
            <img style={image} src={props.mainImg} alt="nature image" />
            <h1 style={centerTitle}> {props.mainTitle} </h1>
        </div>
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
    padding: '0.5rem'
}

export default SectionItem