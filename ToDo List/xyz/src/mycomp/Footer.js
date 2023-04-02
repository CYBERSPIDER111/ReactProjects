import React from 'react'


export const Footer = () => {
    let footerstyle={
        display: "flex",
        position: "relative",
        // position: "dynamic",
        width: "100%",
        bottom: "0",
        // top: "100vh"
        border: "2px solid black",
       
    }
    return (

        <footer className='bg-dark text-light py-3' style={footerstyle}>
            <p className='text-center'>
        Copyright &copy; DevTodosList.com</p>
        </footer>
    )
}