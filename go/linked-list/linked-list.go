package linkedlist

type LinkedListNode struct {
	data int
	next *LinkedListNode
}

type LinkedList struct {
	head   LinkedListNode
	tail   LinkedListNode
	length int
}

func (list *LinkedList) Push(element int) LinkedListNode {
	node := LinkedListNode{data: element}
	// data := reflect.ValueOf(list.head).Field(0)
	// if data.isZero() {

	// }
	return node
}
