import React from 'react'
import NavigationItem from './NavigationItem'

function Content() {
    return(
        <main> 
            <NavigationItem buttonHoverColor="#27706b" mainImg="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" mainTitle='FOREST' alt='forest'/>
            <NavigationItem buttonHoverColor="#83d6e7" mainImg="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" mainTitle='SKY' alt='sky' />
            <NavigationItem buttonHoverColor="#eed6bb" mainImg="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80" mainTitle='DESERT'alt='desert'/>
        </main>
    )
}



export default Content

