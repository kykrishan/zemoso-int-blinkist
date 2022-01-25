import { render, screen } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import BookTab from "./bookTab";



it("Is BookTab is visible",async()=>{
    render(<BookTab status="toAdd"/>);
    const card=screen.findByText("liberary");
    expect(card).toBeInTheDocument;
});