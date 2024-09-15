import React, { useContext } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleSignout = () => {
    // Handle the signout logic here
    window.location.reload(); // For demonstration purposes, this will reset the state
  };

  render() {
    const { isLoggedIn } = this.context;
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {isLoggedIn ? (
            <button onClick={this.handleSignout}>Signout</button>
          ) : (
            <Link to={"/signup"}>
              <button>Signup</button>
            </Link>
          )}
        </ul>
      </nav>
    );
  }
}
Navbar.contextType = AuthContext;

export default Navbar;
