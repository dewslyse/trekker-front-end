import { NavLink } from 'react-router-dom';
import '../styles/sidebar.scss';

const SidebarLinks = () => (
  <ul className="sidebar_content">
    <li className="page_link">
      <NavLink
        to="/Destinations"
        className="link"
        activeClassName="active-link"
      >
        DESTINATIONS
      </NavLink>
    </li>

    <li className="page_link">
      <NavLink
        to="/Destinations"
        className="link"
        activeClassName="active-link"
      >
        RESERVE
      </NavLink>
    </li>

    <li className="page_link">
      <NavLink
        to="/Destinations"
        className="link"
        activeClassName="active-link"
      >
        ADD SAFARI
      </NavLink>
    </li>

    <li className="page_link">
      <NavLink
        to="/Destinations"
        className="link"
        activeClassName="active-link"
      >
        DELETE SAFARI
      </NavLink>
    </li>
  </ul>
);

export default SidebarLinks;
