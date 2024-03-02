
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import ImageComponent from "../Image/ImageComponent";

const NavbarLogo = () => {
    return (
        <span className="navbar-logo">
            <ImageComponent src={logo} alt="Logo" />
        </span>
    );
};

export default NavbarLogo;
