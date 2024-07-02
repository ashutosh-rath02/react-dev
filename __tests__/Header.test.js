import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load Header Component with a login  button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

test("Should render Header Component with 0 cartItems", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("Should render Header Component with cartItems", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

// test("Should render Header component, and should change the Login button to Logout in oneclick ", () => {
//   render(
//     <Provider store={appStore}>
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     </Provider>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//   const logoutEvent = screen.getByRole("button", { name: "Logout" });

//   //   Assertion
//   expect(logoutEvent).toBeInTheDocument();
// });
