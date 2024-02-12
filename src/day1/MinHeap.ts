export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapUp(this.length);
        this.length++;
    }
    delete(): number | undefined {
        const head = this.data[0];
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return head;
        }

        this.data[0] = this.data[this.length];
        this.heapDown(0);
        return head;
    }

    private heapDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);
        const leftV = this.data[leftIdx];
        const rightV = this.data[rightIdx];
        const v = this.data[idx];

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }
        if (leftV > rightV && v > rightV) {
            this.data[idx] = rightV;
            this.data[rightIdx] = v;
            this.heapDown(rightIdx);
        } else if (rightV > leftV && v > leftV) {
            this.data[idx] = leftV;
            this.data[leftIdx] = v;
            this.heapDown(leftIdx);
        }
    }
    private heapUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];

        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapUp(p);
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
