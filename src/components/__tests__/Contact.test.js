import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact test case', () => {

    // beforeAll(() => {
    //     console.log("before all")
    // })

    // beforeEach(() => {
    //     console.log("after each")
    // })

    // afterAll(() => {
    //     console.log("after all")
    // })

    // afterEach(() => {
    //     console.log("after each")
    // })

    it('should load contact component', () => {
        render(<Contact />);
    
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    
    it('should load button inside Contact component', () =>{
        render(<Contact/>);
    
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
    
    it('should load input name inside Contact component', () =>{
        render(<Contact/>);
    
        const button = screen.getByPlaceholderText('name');
        expect(button).toBeInTheDocument();
    })
    
    it('should load 2 input boxes in contact component', () => {
        render(<Contact />);
    
        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toBe(2);
    })
})