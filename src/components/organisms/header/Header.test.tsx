import { render ,screen} from "@testing-library/react"
import React from "react";
import "@testing-library/jest-dom";
import Header from "./header";

it("Is header is visible",async()=>{
    render(<Header/>);
    const header=screen.getByText("Explore");
    expect(header).toBeInTheDocument;
});