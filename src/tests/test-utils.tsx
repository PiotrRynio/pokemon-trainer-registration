import { render } from "@testing-library/react";
import { ReactElement } from "react";

import { AppProvides } from "@/providers/AppProvides";

const customRender = (ui: ReactElement, options?: { route: string }) => {
  render(ui, {
    wrapper: (props) => <AppProvides>{props.children}</AppProvides>,
    ...options,
  });

  return { routerHistory: history };
};

export * from "@testing-library/react";

export { customRender as render };
