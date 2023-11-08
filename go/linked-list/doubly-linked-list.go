package linkedlist

import "errors"

type DoublyLinkedListNode struct {
	Prev *DoublyLinkedListNode
	Next *DoublyLinkedListNode
	Data int
}

type DoublyLinkedList struct {
	Head   *DoublyLinkedListNode
	Tail   *DoublyLinkedListNode
	Length int
}

func (list *DoublyLinkedList) Push(element int) *DoublyLinkedListNode {
	node := &DoublyLinkedListNode{Data: element}
	if list.Head == nil {
		list.Head = node
	} else {
		node.Prev = list.Tail
		list.Tail.Next = node
	}
	list.Tail = node
	list.Length++
	return node
}

func (list *DoublyLinkedList) Pop() (*DoublyLinkedListNode, error) {
	if list.Head == nil {
		return nil, errors.New("list is empty")
	}

	lastNode := list.Tail

	list.Tail = lastNode.Prev
	list.Tail.Next = nil
	list.Length--

	if list.Length == 0 {
		list.Head = nil
	}

	return lastNode, nil
}

func (list *DoublyLinkedList) Shift() (*DoublyLinkedListNode, error) {
	if list.Head == nil {
		return nil, errors.New("list is empty")
	}

	firstNode := list.Head
	newHead := list.Head.Next

	list.Length--

	if list.Length == 0 {
		list.Tail = nil
		list.Head = nil
	} else {
		newHead.Prev = nil
		list.Head = newHead
	}

	return firstNode, nil
}

func (list *DoublyLinkedList) Unshift(element int) *DoublyLinkedListNode {
	node := &DoublyLinkedListNode{Data: element}

	if list.Head == nil {
		list.Head = node
		list.Tail = node
	} else {
		oldHead := list.Head
		oldHead.Prev = node
		list.Head = node
		list.Head.Next = oldHead
	}

	list.Length++

	return list.Head
}

func (list *DoublyLinkedList) Get(position int) *DoublyLinkedListNode {
	if position < 0 || position >= list.Length {
		return nil
	}

	halfLength := list.Length / 2

	var i int
	var currentNode *DoublyLinkedListNode

	if halfLength > position {
		// use next
		i = 0
		currentNode = list.Head
		i++

		for i != position {
			currentNode = currentNode.Next
			i++
		}
	} else {
		i = list.Length - 1
		currentNode = list.Tail
		for i != position {
			currentNode = currentNode.Prev
			i--
		}
	}

	return currentNode
}

func (list *DoublyLinkedList) Set(position int, element int) bool {
	node := list.Get(position)

	if node == nil {
		return false
	} else {
		node.Data = element
		return true
	}
}
