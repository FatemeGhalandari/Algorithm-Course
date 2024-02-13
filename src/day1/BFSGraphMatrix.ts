export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adj = graph[curr];
        for (let c = 0; c < adj.length; ++c) {
            if (adj[c] === 0) {
                continue; //there's no edge at this point
            }
            if (seen[c]) {
                continue;
            }
            seen[c] = true;
            prev[c] = curr;
            q.push(c);
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }
    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    return [source].concat(out.reverse());
}
