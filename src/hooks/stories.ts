import { useQuery } from 'react-query'
import localForage from 'localforage'
import { searchStories } from '../api/stories';
import { ISearchParam } from '../@types/index';

type StoriesKey = 'stories'
const StoriesKeyName = 'stories'

export const useStories = (query?: ISearchParam) => {
    const { data: initialData } = useQuery([StoriesKeyName, 'initialData'], () => localForage.getItem(StoriesKeyName))
    
    return useQuery<any, StoriesKey>(StoriesKeyName, () => searchStories(query), {
        enabled: !!initialData,
        initialData: initialData || [],
        onSuccess: data => localForage.setItem(StoriesKeyName, data),
      })
}
