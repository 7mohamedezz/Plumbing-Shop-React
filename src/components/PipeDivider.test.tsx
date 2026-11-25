import { fireEvent, render, screen } from "@testing-library/react";
import PipeDivider from "./PipeDivider";

it("toggles the valve between closed and 180 degree open states", () => {
  const onOpenChange = vi.fn();
  const { container } = render(<PipeDivider onOpenChange={onOpenChange} />);
  const button = screen.getByRole("button", { name: "فتح صمام الماسورة" });

  fireEvent.click(button);

  expect(screen.getByRole("button", { name: "إغلاق صمام الماسورة" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(container.querySelectorAll("button svg")[1]).toHaveStyle("transform: rotate(180deg)");
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(button);
  expect(onOpenChange).toHaveBeenLastCalledWith(false);
});
