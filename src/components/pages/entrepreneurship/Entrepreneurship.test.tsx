import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Entrepreneurship from "./entrepreneurship";


it("Is entre is visible",async()=>{
    render(<Entrepreneurship></Entrepreneurship>);
    const card=screen.getByAltText("Trending Blinks");
    expect(card).toBeInTheDocument;
});