import styled from 'styled-components';
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";

export const SToolbar = styled(Toolbar)`
.MuiTypography-root  {
    width: 70%;
}
`;

export const SIconWrapper = styled.div`
.icon {
    display: flex;
    width: 50px;
    height: auto;
}
`;

export const SDrawer = styled(Drawer)`
.MuiButtonBase-root {
    padding-left: 30px !important;
}
`;
