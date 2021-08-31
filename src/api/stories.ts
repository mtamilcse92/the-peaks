import axios from 'axios';
import { TSearchStories } from '../@types/index'

const defaultSearchParam = {
    'show-fields': 'starRating,headline,thumbnail,body,short-url', 
    'show-elements': 'all'
}

export const searchStories: TSearchStories = (params = {}) =>
    axios.get(`/search`, { params: { ...params, ...defaultSearchParam  } }).then((res) => res.data?.response?.results || [])
