import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout