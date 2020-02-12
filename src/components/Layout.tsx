import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

function Layout(){
    return(
        <div style={appTitle}>
           <Navbar />
           <Content />
        </div>
    )
}

const appTitle: React.CSSProperties = {
    background: 'black',
    color: 'white'
 }

export default Layout