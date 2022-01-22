import Button from "./liberaryButton";
import { render ,screen} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

it("Is button is visible",async()=>{
    render(<Button></Button>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument;
});