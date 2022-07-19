import "./NavBar.css";
import NavItem from './../NavItem/NavItem';
import logo from './../../logo.png';

const NavBar = () => (
  <header class="header">
  <a href="./index.html"><img src={logo} alt="logo" className="logo" /></a>
  <div className="titleAndNav">
     <h1>Tienda de Vinilos</h1>
    <nav>
      <ul className="navigationButtons">
        <NavItem categoryName="Rock Nacional" />
        <NavItem categoryName="Rock Internacional" />
        <NavItem categoryName="Tango" />
        <NavItem categoryName="Jazz" />
        <NavItem categoryName="Blues" />
      </ul>
    </nav>
  </div>
</header>

);

export default NavBar;
