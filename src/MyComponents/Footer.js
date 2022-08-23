import React from 'react'
// import './footer.css'

export const Footer = () => {
    let footerStyle = {
        // position: "absolute",
        // top: "100vh",
        // width: "100%",
        // border: "2px solid red"
    }

    return (
        <footer className="bg-dark text-light py-2" style = {footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
