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

func TestShift(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)
	list.Push(2)
	node, err := list.Shift()

	if err != nil || node == nil || node.Data != 1 || list.Head.Data != 2 {
		t.Fatalf("Shift() failed, wrong node. Node: %v, Head: %v, Err: %v", node, list.Head, err)
	}
	list.Shift()

	node, err = list.Shift()
	if err == nil || node != nil {
		t.Fatalf("Shift() failed, list is not empty. Node: %v, Err: %v", node, err)
	}
}

func TestUnshift(t *testing.T) {
	list := DoublyLinkedList{}
	list.Unshift(2)

	if list.Head.Data != 2 || list.Tail.Data != 2 {
		t.Fatalf("Unshift(2) failed, head/tail misconfigured. Head: %v, Tail: %v", list.Head, list.Tail)
	}

	list.Unshift(1)

	if list.Head.Data != 1 || list.Tail.Data != 2 {
		t.Fatalf("Unshift(2) failed, head/tail misconfigured. Head: %v, Tail: %v", list.Head, list.Tail)
	}
}

func TestGet(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)
	list.Push(2)
	list.Push(3)
	list.Push(4)
	list.Push(5)

	node := list.Get(1)
	if node.Data != 2 {
		t.Fatalf("Get(0) failed. Node: %v", node)
	}
	node = list.Get(3)
	if node.Data != 4 {
		t.Fatalf("Get(0) failed. Node: %v", node)
	}
	node = list.Get(10)
	if node != nil {
		t.Fatalf("Get(10) failed. Node: %v", node)
	}
	node = list.Get(-10)
	if node != nil {
		t.Fatalf("Get(-10) failed. Node: %v", node)
	}
}