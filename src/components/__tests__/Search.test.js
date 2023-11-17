import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from '../mocks/mockRestaurantListData.json'
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should search reslist for 'sri' text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole('button', { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: 'sri' } });
    fireEvent.click(searchBtn);
    //screen should load four cards
    const cardsAfterSearch = screen.getAllByTestId('resCard');
    expect(cardsAfterSearch.length).toBe(4);
})

it("should filter the cards above 4.3 rating", async () => {
    await act(async () => {
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>)
    })

    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(9);

    const filterBtn = screen.getByRole("button", { name: "Filter" });
    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId('resCard');
    expect(cardsAfterFilter.length).toBe(6);
})