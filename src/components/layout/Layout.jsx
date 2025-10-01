import React from 'react'
import Header from './Header'
import Footer from './Footer'
import useSmoothScroll from '../../hooks/useSmoothScroll'

const layout = ({children}) => {

  // it apply smooth scroll globaly
  
  useSmoothScroll();
  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default layout