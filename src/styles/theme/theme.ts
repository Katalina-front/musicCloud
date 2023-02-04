import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 640,
            md: 1280,
            lg: 1920,
            xl: 2400,
        }
    },
    palette: {
        mode: "dark" || "light"
    }
});