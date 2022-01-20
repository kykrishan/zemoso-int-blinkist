import { render, screen } from "@testing-library/react";
import ImageCard from "./Card";


it("Is card is visible",async()=>{
    render(<ImageCard></ImageCard>);
    const card=screen.getByRole("link");
    expect(card).toBeInTheDocument;
});