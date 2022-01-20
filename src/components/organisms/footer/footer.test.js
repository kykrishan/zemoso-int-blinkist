import { render ,screen} from "@testing-library/react";
import Footer from "./footer";

it("Is footer is visible",async()=>{
    render(<Footer></Footer>);
    const footer=screen.getByRole("heading");
    expect(footer).toBeInTheDocument;
});
it("Is footer is visible",async()=>{
    render(<Footer></Footer>);
    const footer=screen.getByText("learnign");
    expect(footer).toBeVisible;
});