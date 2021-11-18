import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';




const Navbar = () => {
    const [loggedInUser] = useContext(userContext)
    const handleLogout = () => {
        sessionStorage.removeItem('name');
        window.location.replace("/");

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img style={{ height: '80px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeprZNQnl861PRXcDDjCk7zBKTmmQejmWjQ&usqp=CAU" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {sessionStorage.getItem('name') || loggedInUser.name ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"><img style={{ height: '30px' }} className="img-fluid rounded-circle" src={sessionStorage.getItem('pic')} alt="" /> {sessionStorage.getItem('name')} <span onClick={handleLogout}>Logout</span></Link>


                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Log_In</Link>
                                </li>
                            }







                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;