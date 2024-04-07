import { screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { render } from "@/tests/test-utils";

import { BaseButton } from "./BaseButton";

describe("BaseButton", () => {
  test("should render correctly", () => {
    render(<BaseButton>Click me!</BaseButton>);
    const button = screen.getByRole("button", { name: "Click me!" });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("should call callback if button is clicked", () => {
    const onClick = vi.fn();
    render(<BaseButton onClick={onClick}>Click me!</BaseButton>);
    const button = screen.getByRole("button", { name: "Click me!" });
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
