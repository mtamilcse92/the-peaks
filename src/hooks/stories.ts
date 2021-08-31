import { useQuery } from 'react-query'
import { searchStories } from '../api/stories';
import { ISearchParam } from '../@types/index';

type StoriesKey = 'stories'
const StoriesKeyName = 'stories'

export const useStories = (query?: ISearchParam) => {
    return useQuery<Array<any>, StoriesKey>(StoriesKeyName, () => searchStories(query))
}
