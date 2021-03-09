import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="icon-color" href="/">ShareCodedNote</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/note">Note</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/create">Create</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;