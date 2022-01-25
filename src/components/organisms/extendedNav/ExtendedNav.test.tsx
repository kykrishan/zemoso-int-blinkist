import React from "react";
import "@testing-library/jest-dom";
import { render ,screen} from "@testing-library/react";
import ExtendedNav from "./ExtendedNav";

it("Is extended nav Section is visible",async()=>{
    render(<ExtendedNav></ExtendedNav>);
    const navSection=screen.getByText("See popular titles");
    expect(navSection).toBeInTheDocument;
});