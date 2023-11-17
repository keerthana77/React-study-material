import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";

it('should render RestaurantCard with props data', () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Sri Meenakshi Bhavan")
    expect(name).toBeInTheDocument();
})

it('should render Restaurant card with veg label', () => {
    const RestaurantCardVeg = withVegLabel(RestaurantCard);
    render(<RestaurantCardVeg resData={MOCK_DATA}/>);

    const vegLabel = screen.getByText("Veg");
    expect(vegLabel).toBeInTheDocument();
})