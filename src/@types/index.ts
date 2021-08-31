export interface ISearchParam {
    ids?: string
    q?: string
}
export type TSearchStories = (query?: ISearchParam) => Promise<[any]>