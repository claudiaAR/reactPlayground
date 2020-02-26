import React from 'react'

function Navbar() {
    return(
        <div>
            <h1 style={appTitle}>React Playground</h1>
        </div>
    )
}

const appTitle: React.CSSProperties = {
   padding: '1rem 2rem'
}


export default Navbar