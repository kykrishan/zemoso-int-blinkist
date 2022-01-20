import Button from "./liberaryButton";
import { render ,screen} from "@testing-library/react"

it("Is logo is visible",async()=>{
    render(<Button></Button>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument;
});