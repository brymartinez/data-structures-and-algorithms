export class Heap {
  private heapTree: Array<number> = [];
  public insert(element: number) {
    this.heapTree.push(element);

    if (this.heapTree.length !== 1) {
      this.heapify();
    }
  }
  
  // Max heap
  private heapify() {
    let index = this.heapTree.length - 1;
    let lastElement = this.heapTree[index];

    while(this.heapTree[this.getParentNode(index)] !== undefined && lastElement > this.heapTree[this.getParentNode(index)]) {
      const temp = this.heapTree[this.getParentNode(index)];
      this.heapTree[this.getParentNode(index)] = this.heapTree[index];
      this.heapTree[index] = temp;
      index = this.getParentNode(index);
    }
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

  public display() {
    return this.heapTree;
  }

}
