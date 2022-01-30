import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    document.title = "Page Not Found";
    return (
        <div id="wrapper">
            <div id="main">
                <div className='nf__center'>
                    <h1>
                        PAGE NOT FOUND!
                    </h1>
                    <p> Woops! How did you get here? Click <Link to="/"> here</Link> to go back to my portfolio! Take care!</p>
                </div>
            </div>
        </div>
    );
}
