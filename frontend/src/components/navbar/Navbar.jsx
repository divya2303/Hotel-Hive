import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick} style={{fontSize: "2rem"}}>Hotel Hive</span>
        {!user ? (
          <div className="navItems">
            <Link className="btn bg-grey text-success mx-1 navButton" to="/register">Register</Link>
            <Link to="/login" className="navButton" >Login</Link>
          </div>
        ) : (
          <div className="navUser">
            <span className="username">{user.username}</span>
            <div className="btn bg-grey text-danger mx-2 fs-6 username" onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
