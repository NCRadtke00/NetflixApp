import React, { useState, useEffects, useEffect} from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=300" alt="Netflix Logo" className="nav__logo"/>
            
        </div>
    )
}

export default Nav
