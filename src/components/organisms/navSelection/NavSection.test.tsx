import React from "react";
import "@testing-library/jest-dom";
import NavSelection from "./NavSelection";
import { render ,screen} from "@testing-library/react"

it("Is nav Section is visible",async()=>{
    render(<NavSelection></NavSelection>);
    const navSection=screen.getByText("Editorial");
    expect(navSection).toBeInTheDocument;
});