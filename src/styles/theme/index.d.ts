declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      disabledBackground: {
        main: string;
      };
    } & import("@mui/material").Palette;
  }
}

export {};
