import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { PHONE, WHATSAPP_URL } from "@/lib/contact";

describe("landing page", () => {
  it("renders the product and brand sections", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "منتجاتنا" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "العلامات التجارية" })).toBeInTheDocument();
  });

  it("makes the showroom reachable by phone and WhatsApp", () => {
    render(<App />);
    const telLinks = screen.getAllByRole("link", { name: PHONE });
    expect(telLinks).toHaveLength(2);
    telLinks.forEach((link) => expect(link).toHaveAttribute("href", `tel:${PHONE}`));

    const whatsappLinks = screen.getAllByRole("link").filter((link) => link.getAttribute("href") === WHATSAPP_URL);
    expect(whatsappLinks.length).toBe(2);
  });

  it("returns focus to the menu toggle when Escape closes the menu", () => {
    render(<App />);
    const toggle = screen.getByRole("button", { name: "القائمة" });
    fireEvent.click(toggle);

    const links = screen.getAllByRole("link", { name: "المنتجات" });
    fireEvent.keyDown(links[links.length - 1], { key: "Escape" });

    expect(document.activeElement).toBe(toggle);
    expect(screen.getAllByRole("link", { name: "المنتجات" })).toHaveLength(1);
  });
});
