import { modulo3Array as peerModulo3 } from 'peer-filter-c00285802/src/lib/filters/modulo3'
import { sortNum as mySort } from '$lib/filters/sort'

export function combinedFilter(xs: number[]): number[] {
    const afterPeers = peerModulo3(xs);
    return mySort(afterPeers);
}