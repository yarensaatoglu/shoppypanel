import React from 'react'
import Footer from "./Footer.js"
import Sidebar from "./Sidebar.js"
import Header from "./Header.js"

const Container = (props) => {
    return (
        <div>
            <Header/>
            <div class="page-content">
    	     <div class="row">
               <Sidebar/>
                  {props.children}
              </div>
             </div>
            <Footer/>
        </div>
    )
}

export default Container
