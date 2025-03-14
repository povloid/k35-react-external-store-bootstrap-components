import { ReactNode } from "react";
import { FiltersService } from "./FiltersService";
export declare const Filters: <T>({ service, children }: {
    children?: ReactNode;
    service: FiltersService<T>;
    onChange?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FiltersButton: <T>({ service, onChange }: {
    service: FiltersService<T>;
    onChange?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
