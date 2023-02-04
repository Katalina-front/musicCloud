import { JSXElementConstructor, ReactElement, ReactNode } from "react"

export type LayoutProps = {
    children: ReactElement<any, string | JSXElementConstructor<any>> & ReactNode;
}