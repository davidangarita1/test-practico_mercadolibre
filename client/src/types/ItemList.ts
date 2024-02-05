import {Item} from "./Item";

export interface ItemList {
    author: {
        name: string,
        lastname: string
    },
    categories: string[]
    items: Item[]
}