import { render, screen } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import BookDetails from "./bookDetails";


it("Is bookdetails is visible",async()=>{
    render(<BookDetails></BookDetails>);
    const card=screen.getByAltText(/Get the key idea from guptil/i);
    expect(card).toBeInTheDocument;
});