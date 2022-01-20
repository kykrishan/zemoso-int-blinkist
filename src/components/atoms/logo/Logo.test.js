import Logo from "./logo";
import { render ,screen} from "@testing-library/react"

it("Is logo is visible",async()=>{
    render(<Logo></Logo>);
    const logo=screen.getByRole("link")
    expect(logo).toBeInTheDocument;
});