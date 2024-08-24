import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact={true} to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo List
          </NavLink>
        </li>
        <li>
          <NavLink to="/hello" activeClassName="active">
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default Nav;
