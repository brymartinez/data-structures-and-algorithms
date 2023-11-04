export class Heap {
  private heapTree: Array<number> = [];

  public insert(element: number) {
    this.heapTree.push(element);

    if (this.heapTree.length !== 1) {
      this.heapify();
    }
  }

  public delete(element: number) {
    const elementIndex = this.heapTree.findIndex((node) => node === element);

    const lastIndex = this.heapTree.length - 1;

    if (elementIndex !== lastIndex) {
      this.swap(lastIndex, elementIndex);
    }

    this.heapTree.pop();

    if (this.heapTree.length !== 1) {
      this.heapify();
    }
  }

  public display() {
    return this.heapTree;
  }

  // Max heap
  private heapify() {
    let index = this.heapTree.length - 1;
    const lastElement = this.heapTree[index];

    while (
      this.heapTree[this.getParentNode(index)] !== undefined &&
      lastElement > this.heapTree[this.getParentNode(index)]
    ) {
      this.swap(index, this.getParentNode(index));
      index = this.getParentNode(index);
    }
  }

  private swap(firstIndex: number, secondIndex: number) {
    const temp = this.heapTree[secondIndex];
    this.heapTree[secondIndex] = this.heapTree[firstIndex];
    this.heapTree[firstIndex] = temp;
  }

  private getParentNode(i: number) {
    if (this.isRightSide(i)) {
      return (i - 2) / 2;
    } else if (this.isLeftSide(i)) {
      return (i - 1) / 2;
    }
  }

  private isRightSide(i: number) {
    return i % 2 === 0;
  }

  private isLeftSide(i: number) {
    return i % 2 !== 0;
  }
}
