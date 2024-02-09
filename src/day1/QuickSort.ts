function quickSort(arr: number[], lo: number, hi: number): void {
    //base
    if (lo >= hi) {
        return;
    }
    const pivot = partition(arr, lo, hi);

    //recursion
    quickSort(arr, lo, pivot - 1);
    quickSort(arr, pivot + 1, hi);
}
function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
}
