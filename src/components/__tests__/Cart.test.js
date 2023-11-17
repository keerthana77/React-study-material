import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from '../mocks/mockResMenu.json';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should load restuarant menu component", async() => {
    await act(async () => render(<BrowserRouter><Provider store={appStore} >
        <Header />
        <RestaurantMenu />
        <Cart />
    </Provider></BrowserRouter>))

    const accordionHeader = screen.getByText("South Indian (54)");

    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId('foodItems').length).toBe(54);

    expect(screen.getByText("🛒(0 items)")).toBeInTheDocument();
    
    const addBtns = screen.getAllByRole('button', {name: 'Add +'})
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("🛒(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("🛒(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(56);
    
    const clearBtn = screen.getByRole("button",{name: 'Clear'});
    fireEvent.click(clearBtn);

    expect(screen.getAllByTestId('foodItems').length).toBe(54);
})
