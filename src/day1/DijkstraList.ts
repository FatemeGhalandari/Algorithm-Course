function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((v, i) => !v && dists[i] < Infinity);
}
function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < dists.length; i++) {
        if (seen[i]) {
            continue;
        }
        if (min > dists[i]) {
            min = dists[i];
            minIndex = i;
        }
    }
    return minIndex;
}
export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    //prev is who was the last person to update to the shortest known path
    const dists = new Array(arr.length).fill(Infinity);
    dists[source] = 0;
    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;
        const adj = arr[curr];
        for (let i = 0; i < adj.length; ++i) {
            const edge = adj[i];
            if (seen[edge.to]) {
                continue;
            }
            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }
    const path: number[] = [];
    let curr = sink;
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }
    path.push(source);
    return path.reverse();
}
