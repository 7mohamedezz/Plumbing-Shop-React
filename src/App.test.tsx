import { render, screen } from "@testing-library/react";
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
});
