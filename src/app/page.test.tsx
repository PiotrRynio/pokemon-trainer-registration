import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { AppProvides } from "@/providers/AppProvides";

import Page from "./page";

describe("Home Page", () => {
  vi.mock("next/headers", () => ({
    headers: vi.fn().mockImplementation(() => ({
      get: vi.fn().mockReturnValue("127.0.0.1"),
    })),
  }));

  beforeEach(async () => {
    render(await Page(), {
      wrapper: ({ children }) => <AppProvides>{children}</AppProvides>,
    });
  });

  test("should render correctly", async () => {
    const date = screen.getByRole("heading", {
      name: "Sunday, 05.04.2024",
    });
    expect(date).toBeVisible();

    const trainerNameInput = screen.getByRole("heading", {
      name: "Trainer's name",
    });
    expect(trainerNameInput).toBeVisible();

    const trainerAgeInput = screen.getByRole("heading", {
      name: "Trainer's age",
    });
    expect(trainerAgeInput).toBeVisible();

    const pokemonNameInput = screen.getByRole("heading", {
      name: "Pokemon name",
    });
    expect(pokemonNameInput).toBeVisible();

    const pokemonViewer = screen.getByText("Your Pokemon");
    expect(pokemonViewer).toBeVisible();

    const resetButton = screen.getByRole("button", { name: "Reset" });
    expect(resetButton).toBeVisible();

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeVisible();
  });

  describe("form is filled correctly", async () => {
    const correctUserName = "Piotr";
    const correctUserAge = "25";
    const correctPokemonName = "pikachu";

    beforeEach(async () => {
      const user = userEvent.setup();

      const trainerNameInput = screen.getByPlaceholderText("Trainer's name");
      await user.type(trainerNameInput, correctUserName);

      const trainerAgeInput = screen.getByPlaceholderText("Trainer's age");
      await user.type(trainerAgeInput, correctUserAge);

      const pokemonNameInput = screen.getByPlaceholderText("Choose");
      await user.type(pokemonNameInput, correctPokemonName);

      await waitForElementToBeRemoved(() =>
        screen.queryByRole("option", {
          name: /bulbasaur/i,
        }),
      );

      const pikachuOption = await screen.findByRole("option", {
        name: /pikachu/i,
      });

      await user.click(pikachuOption);
    });

    test("should show pokemon details", async () => {
      const pokemonNameInput = screen.getByPlaceholderText("Choose");
      expect(pokemonNameInput).toHaveValue(correctPokemonName);

      const pokemonImage = screen.getByAltText(/pikachu Image/i);
      expect(pokemonImage).toBeVisible();

      const pokemonNameDetail = screen.getByText(/name: pikachu/i);
      expect(pokemonNameDetail).toBeVisible();

      const pokemonTypeDetail = screen.getByText(/electric/i);
      expect(pokemonTypeDetail).toBeVisible();

      const pokemonBaseExperienceDetail =
        screen.getByText(/base experience: 112/i);
      expect(pokemonBaseExperienceDetail).toBeVisible();

      const pokemonIdDetail = screen.getByText(/id: 25/i);
      expect(pokemonIdDetail).toBeVisible();
    });

    test("should show success modal, if user submit correct form", async () => {
      const user = userEvent.setup();

      const submitButton = screen.getByRole("button", { name: "Submit" });
      await user.click(submitButton);

      const modal = screen.getByRole("dialog");
      expect(modal).toBeVisible();

      const modalText = screen.getByText("Success");
      expect(modalText).toBeVisible();
    });

    test("should reset form correctly", async () => {
      const user = userEvent.setup();
      const resetButton = screen.getByRole("button", { name: "Reset" });
      await user.click(resetButton);

      const trainerNameInput = screen.getByPlaceholderText("Trainer's name");
      expect(trainerNameInput).toHaveValue("");

      const trainerAgeInput = screen.getByPlaceholderText("Trainer's age");
      expect(trainerAgeInput).toHaveValue(null);

      const pokemonNameInput = screen.getByPlaceholderText("Choose");
      expect(pokemonNameInput).toHaveValue("");

      const trainerNameError = screen.queryByText(
        "Required from 2 to 20 symbols",
      );
      expect(trainerNameError).not.toBeInTheDocument();

      const trainerAgeError = screen.queryByText("Required range from 16-99");
      expect(trainerAgeError).not.toBeInTheDocument();

      const pokemonNameError = screen.queryByText("Choose something");
      expect(pokemonNameError).not.toBeInTheDocument();
    });
  });

  test("should show error messages, if user try submit empty form", async () => {
    const user = userEvent.setup();

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);

    const trainerNameError = screen.getByText("Required from 2 to 20 symbols");
    expect(trainerNameError).toBeVisible();

    const trainerAgeError = screen.getByText("Required range from 16-99");
    expect(trainerAgeError).toBeVisible();

    const pokemonNameError = screen.getByText("Choose something");
    expect(pokemonNameError).toBeVisible();
  });

  test("should show error messages, if user try submit invalid form", async () => {
    const user = userEvent.setup();

    const trainerNameInput = screen.getByPlaceholderText("Trainer's name");
    await user.type(trainerNameInput, "P");

    const trainerAgeInput = screen.getByPlaceholderText("Trainer's age");
    await user.type(trainerAgeInput, "102");

    const pokemonNameInput = screen.getByPlaceholderText("Choose");
    await user.type(pokemonNameInput, "Pika");

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);

    const trainerNameError = screen.getByText("Required from 2 to 20 symbols");
    expect(trainerNameError).toBeVisible();

    const trainerAgeError = screen.getByText("Required range from 16-99");
    expect(trainerAgeError).toBeVisible();

    const pokemonNameError = screen.getByText("Choose something");
    expect(pokemonNameError).toBeVisible();
  });
});
