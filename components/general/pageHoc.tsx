import React from 'react';
import Header from '../dashboard/header';
import Navbar from '../dashboard/navbar'


const pageHoc = React.memo((props:any)=>{
    return (
        <>
        
         <Header></Header>
         {props.children}
        <Navbar></Navbar>
        
        </>
       
    
      )
})
    




export default pageHoc