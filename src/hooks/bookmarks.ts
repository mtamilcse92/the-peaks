import { useQuery } from 'react-query'
import localForage from 'localforage'
import { searchStories } from '../api/stories';
import { ISearchParam } from '../@types/index';

type BookmarksKey = 'bookmarks'
const BookmarksKeyName = 'bookmarks'

export const useBookmarks = (query?: ISearchParam) => {
    const { data: initialData } = useQuery([BookmarksKeyName, 'initialData'], () => localForage.getItem(BookmarksKeyName))
    return useQuery<any, BookmarksKey>(BookmarksKeyName, () => searchStories(query), {
        enabled: !!initialData,
        initialData: initialData || [],
        onSuccess: data => localForage.setItem(BookmarksKeyName, data),
      })
}
