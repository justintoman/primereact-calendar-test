import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Calendar } from "primereact/calendar";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

test("can open the calendar dialog", async () => {
  const user = userEvent.setup();
  render(
    <div>
      <label htmlFor="test">Test Label</label>
      <Calendar inputId="test" />
    </div>
  );

  expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();

  await user.click(screen.getByLabelText(/Test Label/i));

  await waitFor(() =>
    // this never passes
    // why is the dialog always display: none?
    expect(screen.getByRole("dialog")).toBeVisible()
  );

  fireEvent.click(screen.getByLabelText(/Test Label/i));
  await waitFor(() =>
    // this never passes
    // why is the dialog always display: none?
    expect(screen.getByRole("dialog")).toBeVisible()
  );
});
