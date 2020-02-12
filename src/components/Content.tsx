import React from 'react'
import SectionItem from './SectionItem'

function Content() {
    return(
        <main> 
            <SectionItem mainImg="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" mainTitle='FOREST' />
            <SectionItem mainImg="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" mainTitle='SKY' />
            <SectionItem mainImg="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80" mainTitle='DESERT'/>
        </main>
    )
}



export default Content

