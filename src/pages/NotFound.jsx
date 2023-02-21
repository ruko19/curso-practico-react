import React from 'react'
import notfound from "../assets/notfound.svg"
import "../styles/NotFound.scss"


const NotFound = () => {

    return (
        <div className="not_found_page">
            <h1>404 Error Page </h1>
            <p class="zoom-area"><b></b>  </p>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
        </div>
    )
}

export default NotFound