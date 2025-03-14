import { Cursor } from "@k35/react-external-store"
import { FilterByAppState } from "./FilterByAppState"

export interface FilterByService {
    isActive(): boolean

    getFilterCursor(): Cursor<FilterByAppState>
}
