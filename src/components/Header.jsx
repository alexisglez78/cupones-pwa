/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bulma/css/bulma.css';


export default function Header() {
    return (
        <div className="container is-fullhd" style={{padding:'1%',marginBottom:'1em'}}>
            <nav className="level">
                <p className="level-left ">
                <img src="https://globalpaq.com/images/logo%20globalpaq.png" alt="logo" style={{width:'15em'}}/>
                </p>
            </nav>
        </div>
    )
}