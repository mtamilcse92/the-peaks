export interface ISearchParam {
    ids?: string
    q?: string
    'order-by'?: string
}
export type TSearchStories = (query?: ISearchParam) => Promise<[any]>