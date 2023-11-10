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

func TestSet(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)
	list.Push(3)
	list.Set(1, 2)

	if list.Tail.Data != 2 {
		t.Fatalf("Set(1, 2) failed. Node: %v", list.Tail.Data)
	}

	val := list.Set(2, 3)

	if val != false {
		t.Fatalf("Set(2, 3) failed. Val: %v", val)
	}
}

func TestInsert(t *testing.T) {
	list := DoublyLinkedList{}

	list.Insert(0, 1)

	if list.Head.Data != 1 {
		t.Fatalf("Insert(0, 1) failed. Head misconfigured. Head: %v", list.Head)
	}

	list.Insert(1, 3)

	if list.Tail.Data != 3 {
		t.Fatalf("Insert(1, 3) failed. Tail misconfigured. Tail: %v", list.Tail)
	}

	list.Insert(1, 2)

	if list.Head.Next.Data != 2 {
		t.Fatalf("Insert(1, 2) failed. Head misconfigured. Node: %v", list.Head.Next)
	}

	if list.Tail.Prev.Data != 2 {
		t.Fatalf("Insert(1, 2) failed. Tail misconfigured. Node: %v", list.Tail.Prev)
	}

	list.Insert(3, 4)

	if list.Tail.Data != 4 || list.Tail.Prev.Next.Data != 4 {
		t.Fatalf("Insert(3, 4) failed. Tail misconfigured. Node: %v", list.Tail)
	}

	node := list.Insert(28, 28)

	if node != false {
		t.Fatalf("Insert(28, 28) failed. Did not return false. Node: %v", node)
	}
}

func TestRemove(t *testing.T) {
	list := DoublyLinkedList{}
	list.Push(1)
	list.Push(2)
	list.Push(3)
	list.Push(4)
	list.Push(5)

	node := list.Remove(0)

	if node.Data != 1 || list.Head.Data != 2 || list.Head.Prev != nil {
		t.Fatalf("Remove(0) failed. Head misconfigured. Head: %v", list.Head)
	}

	node = list.Remove(3)

	if node.Data != 5 || list.Tail.Data != 4 || list.Tail.Next != nil {
		t.Fatalf("Remove(3) failed. Tail misconfigured. Tail: %v", list.Tail)
	}

	node = list.Remove(1)

	if node.Data != 3 || list.Head.Next.Data != 4 || list.Tail.Prev.Data != 2 {
		t.Fatalf("Remove(1) failed. Head/Tail misconfigured. Head: %v, Tail: %v", list.Head, list.Tail)
	}

	node = list.Remove(28)

	if node != nil {
		t.Fatalf("Remove(28) failed. Did not return nil. Node: %v", node)
	}
}
