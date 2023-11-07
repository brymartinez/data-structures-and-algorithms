package linkedlist

import "errors"

type LinkedListNode struct {
	Data int
	Next *LinkedListNode
}

type LinkedList struct {
	Head   *LinkedListNode
	Tail   *LinkedListNode
	Length int
}

func (list *LinkedList) Push(element int) LinkedListNode {
	node := LinkedListNode{Data: element}

	if list.Head == nil {
		list.Head = &node
	} else {
		list.Tail.Next = &node
	}

	list.Tail = &node
	list.Length++
	return node
}

func (list *LinkedList) Pop() (*LinkedListNode, error) {
	if list.Head == nil {
		return nil, errors.New("linked list is empty")
	}

	currentNode := list.Head
	newTailNode := list.Tail

	for currentNode.Next != nil {
		newTailNode = currentNode
		currentNode = currentNode.Next
	}

	list.Tail = newTailNode
	list.Tail.Next = nil
	list.Length--

	if list.Length == 0 {
		list.Head = nil
	}

	return currentNode, nil
}

func (list *LinkedList) Shift() (*LinkedListNode, error) {
	if list.Head == nil {
		return nil, errors.New("linked list is empty")
	}

	returnedHead := list.Head

	list.Head = list.Head.Next

	list.Length--

	if list.Length == 0 {
		list.Tail = nil
		list.Head = nil
	}

	return returnedHead, nil
}

func (list *LinkedList) Unshift(element int) (*LinkedListNode, error) {
	node := LinkedListNode{Data: element}

	if list.Head == nil {
		list.Head = &node
		list.Tail = &node
	} else {
		oldHead := list.Head
		list.Head = &node
		list.Head.Next = oldHead
	}

	list.Length++

	return list.Head, nil
}
