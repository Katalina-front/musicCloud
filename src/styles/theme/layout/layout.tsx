import {
  Breakpoint,
  createTheme,
  CssBaseline,
  darkScrollbar,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./layout.types";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { theme } from "../theme";
import { SBox } from "./layout.styles";
import { Footer, Navbar } from "../../../components";

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const values = { xs: 470, sm: 640, md: 1280, lg: 1920, xl: 2400 };

  const globalTheme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          ...theme.breakpoints,
          values,
          keys: Object.keys(values) as Breakpoint[],
          // NOTE: материал неправильно работает с брейкпоинтами если не переписать функции
          up: (key) =>
            `@media (min-width: ${
              typeof key === "string" ? values[key] : key
            }px)`,
          down: (key) =>
            `@media (max-width: ${
              typeof key === "string" ? values[key] : key
            }px)`,
        },
        palette: {
          mode: prefersDarkMode ? "light" : "dark",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
              body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
            }),
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <SCThemeProvider theme={globalTheme}>
        <Navbar />
        <SBox>{children}</SBox>
        <Footer />
      </SCThemeProvider>
    </ThemeProvider>
  );
};
