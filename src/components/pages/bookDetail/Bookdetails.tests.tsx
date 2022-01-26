import { render, screen } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import BookDetails from "./bookDetails";


it("Is bookdetails is visible",async()=>{
    render(<BookDetails></BookDetails>);
    const card=screen.findByAltText(/Get the key/i);
    expect(card).toBeInTheDocument;
});