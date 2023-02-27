import useTheme from '@mui/material/styles/useTheme';
import { useMemo } from 'react';
import { useWindowSize } from './use-windows-size';

export const useThemeBreakpoints = (): { isTablet?: boolean; isMobile?: boolean; isSmallDesktop?: boolean } => {
    const theme = useTheme();
    const size = useWindowSize();

    const isSmallDesktop = useMemo(() => !!size.width && size.width < theme.breakpoints.values.lg, [size, theme]);
    const isTablet = useMemo(() => !!size.width && size.width < theme.breakpoints.values.md, [size, theme]);
    const isMobile = useMemo(() => !!size.width && size.width < theme.breakpoints.values.sm, [size, theme]);
    return {
        isMobile,
        isTablet, // Tablet and Mobile
        isSmallDesktop, //SmallDesktop, Tablet and Mobile
    };
};