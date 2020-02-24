import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import MyButton from './MyButton'

function Layout(){
    return(
        <div style={appTitle}>
            <MyButton />
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