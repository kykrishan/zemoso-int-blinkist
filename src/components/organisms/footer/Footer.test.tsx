import { render ,screen} from "@testing-library/react";
import Footer from "./Footer";
import React from "react";
import "@testing-library/jest-dom";

it("Is footer is visible",async()=>{
    render(<Footer></Footer>);
    const footer=screen.findByText("Big ideas in small packages");
    expect(footer).toBeInTheDocument;
});