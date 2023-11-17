import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


test('should render header with login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button", {name: 'Login'});
    // const loginBtn = screen.getByText('Login'); //Not recommended always try to use getByRole
    expect(loginBtn).toBeInTheDocument();
})

test('should render header component with cart 0 items', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("🛒(0 items)");
    expect(cartItems).toBeInTheDocument();
})

test('should render header component with cart dynamic items', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/🛒/);
    expect(cartItems).toBeInTheDocument();
})

test('should change login button to logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button", {name: 'Login'});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", {name: 'Logout'});
    expect(logoutBtn).toBeInTheDocument();
})



