import { render, screen } from "@testing-library/react";
import TaglineSection from "./TaglineSection";

it("shows the plumber invoice request and item list", () => {
  render(<TaglineSection />);

  expect(screen.getByRole("heading", { name: "معاك طلبات السباك؟" })).toBeInTheDocument();
  expect(screen.getByText("٦ ماسورة ٣/٤ لحام")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "ابعت الفاتورة على واتساب" })).toHaveAttribute(
    "href",
    expect.stringContaining("wa.me/201003771479"),
  );
});
