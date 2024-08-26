import "../css/Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate()

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text">Cem AŞ</p>
      </div>
      <div className="flex-row">
        <input
          style={{ marginRight: "10px" }}
          className="input"
          placeholder="arama"
        />
        <div>
          {theme ? (
            <MdDarkMode onClick={changeTheme} className="icon" />
          ) : (
            <CiLight onClick={changeTheme} className="icon" />
          )}

          <FaShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
