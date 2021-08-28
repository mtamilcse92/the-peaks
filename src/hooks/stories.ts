import { useQuery, useMutation } from 'react-query'
import { searchStories } from '../api/stories';

type StoriesKey = 'stories'
const StoriesKey = 'stories'

export const useStories = () => {
    return useQuery<Array<any>, StoriesKey>(StoriesKey, searchStories)
}
