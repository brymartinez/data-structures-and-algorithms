package linkedlist

import (
	"testing"
)

func TestPush(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)

	if list.Head.Data != 1 || list.Head.Next != nil || list.Head.Prev != nil {
		t.Fatalf("Push(1) failed, head misconfigured. Head: %v", list.Head)
	}

	secondNode := list.Push(2)

	if list.Head.Next.Data != 2 || secondNode.Prev.Data != 1 {
		t.Fatalf("Push(2) failed. First Node: %v, 2nd node: %v", list.Head, secondNode)
	}
}

func TestPop(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)
	list.Push(2)
	list.Push(3)
	list.Push(4)
	list.Push(5)
	poppedNode, err := list.Pop()

	if poppedNode.Data != 5 || err != nil {
		t.Fatalf("Pop() failed, wrong return value. Node: %v", poppedNode)
	}

	if list.Tail.Data != 4 || list.Tail.Prev.Data != 3 || list.Tail.Next != nil {
		t.Fatalf("Pop() failed, new tail is invalid. Tail: %v", list.Tail)
	}

	list.Pop()
	list.Pop()
	list.Pop()
	poppedNode, _ = list.Pop()

	if poppedNode.Data != 1 || list.Head != nil {
		t.Fatalf("Pop() failed, wrong head. Head: %v, Node: %v", list.Head, poppedNode)
	}

	poppedNode, err = list.Pop()

	if err == nil {
		t.Fatalf("Pop() failed, should throw error. Node: %v, Err: %v", poppedNode, err)
	}
}
