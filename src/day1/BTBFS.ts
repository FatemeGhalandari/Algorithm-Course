export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<Number> | null)[] = [head];

    while (queue.length) {
        const curr = queue.shift() as BinaryNode<Number> | null | undefined;
        if (!curr) {
            continue;
        }
        if (curr.value === needle) {
            return true;
        }

        queue.push(curr.left);
        queue.push(curr.right);
    }
    return false;
}
