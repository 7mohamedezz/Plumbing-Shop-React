import { render, screen } from "@testing-library/react";
import TaglineSection from "./TaglineSection";

it("shows the full tagline when reduced motion is on", () => {
  const original = window.matchMedia;
  window.matchMedia = (query: string) =>
    ({ matches: true, media: query }) as unknown as MediaQueryList;

  const { container } = render(<TaglineSection />);

  expect(screen.getByRole("heading")).toHaveTextContent(
    "القطعة الصحيحة في المكان الصحيح. من أول مرة.",
  );
  const words = container.querySelectorAll("h2 span span");
  expect(words.length).toBe(8);
  expect([...words].some((word) => word.className.includes("text-ink/20"))).toBe(false);

  window.matchMedia = original;
});
