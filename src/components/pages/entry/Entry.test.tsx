import { render, screen } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import EntryPage from "./entrt";


it("Is card is visible",async()=>{
    render(<EntryPage></EntryPage>);
    const card=screen.getByAltText("My Liberay");
    expect(card).toBeInTheDocument;
});