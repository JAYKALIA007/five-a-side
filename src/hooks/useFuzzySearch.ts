import Fuse from 'fuse.js'
import { Player } from '../types'

export const useFuzzySearch = ({ searchQuery, list }: { searchQuery: string, list: Player[] }) => {
    const fuseOptions = {
        keys: ['name'],
        threshold: 0.4
    };

    const fuse = new Fuse(searchQuery ? list : [], fuseOptions);
    const searchResults = searchQuery ? fuse.search(searchQuery).map(result => result.item) : list;
    return searchResults
};