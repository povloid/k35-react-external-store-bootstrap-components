import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { ModalAppState } from "./ModalAppState";
export declare const Modal: (props: {
    size?: "xl" | "lg" | "sm";
    centred?: boolean;
    cursor: Cursor<ModalAppState>;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ModalHeader: (props: {
    onClose?: () => void;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ModalBody: ({ children }: {
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ModalFooter: (props: {
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
