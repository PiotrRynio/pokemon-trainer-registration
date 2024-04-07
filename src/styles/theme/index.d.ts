declare module "@mui/material/styles" {
  interface Theme {
    base: import("./theme").CustomBase;
  }

  interface ThemeOptions {
    base: import("./theme").CustomBase;
  }
}

export {};
