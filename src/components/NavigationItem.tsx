import React, { Component} from 'react'
// import { render } from 'react-dom'

interface Props { 
    mainImg: string; 
    mainTitle: string; 
    buttonHoverColor: string;
    alt: string;
}

interface State {
    isHovering: boolean;
}

// function SectionItem(props: Props)
class NavigationItem extends Component<Props, State> {
    state = {
        isHovering: false
    }

    render() {
        const { mainImg, mainTitle, alt, buttonHoverColor } = this.props
        return (
            <button
                style={this.state.isHovering ? {backgroundColor: buttonHoverColor} : undefined}
                onMouseOver={() => this.setState({ isHovering: true })}
                onMouseLeave={() => this.setState({ isHovering: false })}
            >
                <div style={imgFlex}>
                    <img style={image} src={mainImg} alt={alt}/>
                    <h1 style={centerTitle}> {mainTitle} </h1>
                </div>
            </button>
        )
    }
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



export default NavigationItem