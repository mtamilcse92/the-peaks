export const storageKey = {
    bookmark: 'bookmark_list'
}

type IAddItems = (key: string, values: any []) => void
export const addItems: IAddItems = (key, values = []) => localStorage.setItem(key, JSON.stringify(values));

type TGetItems = (key: string) => any
export const getItems: TGetItems = (key) => JSON.parse(localStorage.getItem(key) || '[]');