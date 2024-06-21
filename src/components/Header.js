import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://cdn.dribbble.com/userupload/9781333/file/original-020472ecdda18c6418862b973b0110de.jpg"
      alt="Food Fire Logo"
    />
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
        <button
          type="text"
          onClick={() => {
            auth === "Login" ? setAuth("Logout") : setAuth("Login");
          }}
        >
          {auth}
        </button>
      </div>
    </div>
  );
};

export default Header;
