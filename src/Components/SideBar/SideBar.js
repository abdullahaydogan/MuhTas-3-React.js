import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PeopleIcon from "@mui/icons-material/People"; 

const menuItems = [
  { name: "Home Page", icon: <HomeIcon />, path: "/" },
  { name: "Log In", icon: <LoginIcon />, path: "/logIn" },
  { name: "Sign Up", icon: <PersonAddIcon />, path: "/signUp" },
  { name: "Add Product", icon: <AddBoxIcon />, path: "/productCreate" },
  { name: "My Products", icon: <InventoryIcon />, path: "/productList" },
  { name: "User List", icon: <PeopleIcon />, path: "/userList" }, 
  { name: "Contact", icon: <ContactMailIcon />, path: "/contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Home Page");
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigation = (name, path) => {
    setActive(name);
    navigate(path);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "⬅" : "➡"}
      </button>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={active === item.name ? "active" : ""}
            onClick={() => handleNavigation(item.name, item.path)}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
