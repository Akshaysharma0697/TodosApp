import React from 'react'

export const Footer = () => {
    let myfooterstyle={
        width:"100%",
        border:"2px solid red"
    }
    return (
        <footer className="bg-dark text-light my-3" style={myfooterstyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
         
        </footer>
    )
}
