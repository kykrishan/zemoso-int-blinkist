import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Entrepreneurship from "./Entrepreneurship";


it("Is entre is visible",async()=>{
    render(<Entrepreneurship></Entrepreneurship>);
    const card=screen.findByAltText("Trending Blinks");
    expect(card).toBeInTheDocument;
});