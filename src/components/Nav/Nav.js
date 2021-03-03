import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.addEventListener("scroll", transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                    alt="netflix-logo"
                />
                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                    alt="netflix-avatar"
                />
            </div>
        </div>
    )
}

export default Nav;