import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () =>{
    let history = useHistory();

    const handleClick = (path: string) => {
        history.push(path);
    }
    
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Typescript Demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active"  onClick={() => handleClick('/home')}>Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" onClick={() => handleClick('/inquiry')}>Inquiry</a>
                        <a className="nav-item nav-link disabled" href="#">About Us</a>
                        <a className="nav-item nav-link disabled" href="#">Contact Us</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;
