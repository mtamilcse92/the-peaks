import axios from 'axios';

export const searchStories = (): Promise<[any]> =>
    axios.get(`/search`).then((res) => res.data?.response?.results || [])
