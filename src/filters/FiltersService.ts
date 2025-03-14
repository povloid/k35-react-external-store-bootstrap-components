import { Cursor } from "@k35/react-external-store";
import { FilterByService } from "./FilterByService";


export interface FiltersService<T> {
    readonly cursor: Cursor<T>
    readonly services: FilterByService[]
    clearAll(): void

} 