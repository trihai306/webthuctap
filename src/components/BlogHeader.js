import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function BLogHeader() {

    return (
        <div className="blog-header">
            <div className="wrap-btn-header">
                <span className="btn-header">
                    Subscribe to our YouTube channel for free marketing tips!
                </span>
            </div>
            <div className="header-navbar">
                <ul className="menu-list">
                    <li className="menu-item">Marketing</li>
                    <li className="menu-item">Business</li>
                    <li className="menu-item">Sales</li>
                    <li className="menu-item">News</li>
                    <li className="menu-item">All</li>
                </ul>
                <div className="navbar-search">
                    <input placeholder="Search Blog" className="search-input input-blog"></input>
                    <Button variant="primary" className="btn-search">
                        <FontAwesomeIcon icon = {faMagnifyingGlass}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BLogHeader;