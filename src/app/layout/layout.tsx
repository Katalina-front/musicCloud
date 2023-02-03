import {
  Breakpoint,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./layout.types";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/ui-theme";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const values = { xs: 470, sm: 640, md: 1280, lg: 1920, xl: 2400 };
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <SCThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </SCThemeProvider>
    </ThemeProvider>
  );
};
