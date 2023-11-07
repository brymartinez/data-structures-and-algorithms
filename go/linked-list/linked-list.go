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

func (list *LinkedList) Get(position int) *LinkedListNode {
	currentNode, i := list.Head, 0

	if position < 0 || position >= list.Length {
		return nil
	}

	for i != position {
		currentNode = currentNode.Next
		i++
	}

	return currentNode
}

func (list *LinkedList) Set(position int, element int) bool {
	node := list.Get(position)

	if node == nil {
		return false
	} else {
		node.Data = element
		return true
	}
}

func (list *LinkedList) Insert(position int, element int) bool {
	if position == 0 {
		_, err := list.Unshift(element)
		return err == nil
	} else if position == list.Length-1 {
		list.Push(element)
		return true
	} else {
		prevNode := list.Get(position - 1)
		if prevNode == nil {
			return false
		}
		nextNode, newNode := prevNode.Next, LinkedListNode{Data: element}

		prevNode.Next = &newNode
		newNode.Next = nextNode
	}

	list.Length++
	return true
}

func (list *LinkedList) Remove(position int) *LinkedListNode {
	if position == 0 {
		node, err := list.Shift()
		if err != nil {
			return node
		} else {
			return nil
		}
	} else if position == list.Length-1 {
		node, err := list.Pop()
		if err != nil {
			return node
		} else {
			return nil
		}
	} else {
		prevNode := list.Get(position - 1)
		if prevNode == nil {
			return nil
		}
		thisNode := list.Get(position)
		prevNode.Next = thisNode.Next
		list.Length--
		return thisNode
	}
}

func (list *LinkedList) Reverse() *LinkedList {
	node := list.Head
	list.Head = list.Tail
	list.Tail = node

	var next *LinkedListNode
	var prev *LinkedListNode = nil

	for node != nil {
		next = node.Next
		node.Next = prev
		prev = node
		node = next
	}

	return list
}

func (list *LinkedList) Sort() {
	currentNode := list.Head
	var index *LinkedListNode
	var temp int

	if list.Head == nil {
		return
	} else {
		for currentNode != nil {
			index = currentNode.Next
			for index != nil {
				if currentNode.Data > index.Data {
					temp = currentNode.Data
					currentNode.Data = index.Data
					index.Data = temp
				}
				index = index.Next
			}
			currentNode = currentNode.Next
		}
	}
}

func (list *LinkedList) Display() []int {
	var result []int
	node := list.Head

	for node != nil {
		result = append(result, node.Data)
		node = node.Next
	}

	return result
}
