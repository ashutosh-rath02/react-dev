import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="w-44 h-32"
      src="https://cdn.dribbble.com/userupload/9781333/file/original-020472ecdda18c6418862b973b0110de.jpg"
      alt="Food Fire Logo"
    />
  </a>
);

const Header = () => {
  const onlineStatus = useOnlineStatus();
  // use useState for user logged in or logged out

  const { loggedInUser } = useContext(UserContext);
  const [isLoggedin, setIsLoggedin] = useState(false);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItemsHeader", cartItems);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <Title />
      <div className="flex flex-row p-2 m-4">
        <ul className="flex gap-4 ">
          <li className="hover:font-medium px-2 py-1 rounded-xl flex items-center justify-center">
            {onlineStatus ? "Online-🟢" : "Offline-🔴"}
          </li>
          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center font-bold">
            {loggedInUser}
          </li>
          <li className="hover:font-medium px-2 rounded-xl flex items-center justify-center">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button className="Logout" onClick={() => setIsLoggedin(false)}>
                Logout
              </button>
            ) : (
              <button
                className="Login"
                onClick={() => navigate("/login")}
                aria-label="Login"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
